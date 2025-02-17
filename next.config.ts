import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
	trailingSlash: true,
	i18n: undefined, // Отключить, если не используешь
	rewrites: undefined,
	redirects: undefined,
}

export default nextConfig
