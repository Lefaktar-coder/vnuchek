import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
	reactStrictMode: false,
	swcMinify: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '**',
			},
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
}

export default nextConfig
