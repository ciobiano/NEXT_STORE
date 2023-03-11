import * as admin from "firebase-admin";

const { credential } = admin;

// Secure your firebase admin sdk
const serviceAccount = require("../../../permission.json");
const app = !admin.apps.length
	? admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
	  })
	: admin.app();

//Stripe connection to firebase
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

// Define the buffer function here
const buffer = async (req) => {
	const chunks = [];
	for await (const chunk of req) {
		chunks.push(chunk);
	}
	return Buffer.concat(chunks);
};

const fulfillOrder = async (session) => {
	console.log("Fulfilling order", session);

	return app
		.firestore()
		.collection("users")
		.doc(session.metadata.email)
		.collection("orders")
		.doc(session.id)
		.set({
			amount: session.amount_total / 100,
			amount_shipping: session.total_details.amount_shipping / 100,
			images: JSON.parse(session.metadata.images),
			timestamp: admin.firestore.FieldValue.serverTimestamp(),
		})
		.then(() => {
			console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
		});
};

export default async (req, res) => {
	if (req.method === "POST") {
		const requestBuffer = await buffer(req);
		const payload = requestBuffer.toString();

		const sig = req.headers["stripe-signature"];

		let event;

		//verify Event from strip
		try {
			event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
		} catch (err) {
			console.log("Error", err.message);
			return res.status(400).send(`Webhook error: ${err.message}`);
		}

		//Handle the checkout.session.completed event
		if (event.type === "checkout.session.completed") {
			const session = event.data.object;

			//Fullfill the order
			await fulfillOrder(session);

			res.json({ received: true });
		} else {
			res.setHeader("Allow", "POST");
			res.status(405).end("Method Not Allowed");
		}
	}
};

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};
