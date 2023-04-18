/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};
module.exports = {
	...nextConfig,
	// Add global CSS file to be imported in all components
	css: ['~/styles/globals.css'],
};
