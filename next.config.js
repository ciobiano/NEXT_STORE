/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;


// next.config.js

module.exports = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["links.papareact.com", "fakestoreapi.com"]
	},
	env : {
		stripe_public_key: process.env.STRIPE_PUBLIC_KEY
	}
};

