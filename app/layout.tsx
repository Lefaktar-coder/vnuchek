import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import './globals.css'

import localFont from 'next/font/local'

const customFont = localFont({
	src: [
		{
			path: '../public/fonts/Krivulya.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Krivulya.woff2',
			weight: '700',
			style: 'bold',
		},
	],
	variable: '--font-custom',
})

const manrope = Manrope({
	variable: '--font-manrope',
	subsets: ['latin'],
	weight: ['400', '700'],
})

export const metadata: Metadata = {
	title: 'Сытый внучек',
	description: 'Магазин фермерских продуктов',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${manrope.variable} ${customFont.variable} antialiased`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
