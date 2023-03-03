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
		domains: ["links.papareact.com", "fakestoreapi.com"],
	},
};

module.exports = {
	images: {
		domains: ["links.papareact.com"],
	},
};
