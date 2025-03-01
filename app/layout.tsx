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

				{/* Yandex.Metrika counter  */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(100113937, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
            });
            `,
					}}
				/>

				<noscript>
					<div>
						<img
							src='https://mc.yandex.ru/watch/100113937'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>

				{/* /Yandex.Metrika counter  */}
			</body>
		</html>
	)
}
