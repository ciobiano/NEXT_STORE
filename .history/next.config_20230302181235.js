/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;


const newLocal = "fakestoreapi.com";
// next.config.js

module.exports = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["links.papareact.com", newLocal],
	},
};

