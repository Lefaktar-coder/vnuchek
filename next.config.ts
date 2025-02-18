import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
	reactStrictMode: false,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
}

export default nextConfig
