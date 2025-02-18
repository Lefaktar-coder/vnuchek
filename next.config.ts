import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
	images: {
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
