import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'

const geistSans = Manrope({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Manrope({
	variable: '--font-geist-mono',
	subsets: ['latin'],
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
