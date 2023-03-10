import React, { useState } from "react";
import Header from "../components/Header";
import { useSession, getSession } from "next-auth/react";
import moment from "moment/moment";
import db from "../../firebase";
import Order from "../components/Order";

function orders({ orders }) {
	const session = useSession();

	return (
		<div>
			<Header />
			<main className="max-w-screen-lg mx-auto p-10">
				<h1 className="text-3xl border-b mb-2 border-yellow-400">Orders</h1>

				{session ? (
					<>
						{orders ? <h2>{orders.length} Order</h2> : <p>Kindly login into your account to view details</p>}
					</>
				) : (
					<h2>Please sign in to see your orders</h2>
				)}
				<div className="mt-5 space-y-4 ">
					{orders?.map(
						({ id, amount, amountShipping, items, timestamp, images }) => (
							<Order
								key={id}
								id={id}
								amount={amount}
								amountShipping={amountShipping}
								items={items}
								timestamp={timestamp}
								images={images}
							/>
						)
					)}
				</div>
			</main>
		</div>
	);
}

export default orders;

export async function getServerSideProps(context) {
	const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

	// Get the user logged in credentials / token
	const session = await getSession({ req: context.req });

	if (!session) {
		return {
			props: {},
		};
	}

	// Firebase db
	const stripeOrders = await db
		.collection("users")
		.doc(session.user.email)
		.collection("orders")
		.orderBy("timestamp", "desc")
		.get();

	// Stripe orders
	const orders = await Promise.all(
		stripeOrders.docs.map(async (order) => {
			const amountShipping =
				order.data().amountShipping !== undefined
					? order.data().amountShipping
					: null;

			return {
				id: order.id,
				amount: order.data().amount,
				amountShipping: amountShipping,
				images: order.data().images,
				timestamp: moment(order.data().timestamp.toDate()).unix(),
				items: (
					await stripe.checkout.sessions.listLineItems(order.id, {
						limit: 100,
					})
				).data,
			};
		})
	);

	return {
		props: {
			orders,
		},
	};
}
