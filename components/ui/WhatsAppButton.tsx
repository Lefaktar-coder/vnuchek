'use client'

import { useState, useEffect } from 'react'

interface WhatsAppButtonProps {
	phoneNumber: string
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleWhatsAppClick = () => {
		const whatsappUrl = `https://wa.me/${phoneNumber}`
		window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
	}

	if (!mounted) {
		return null // или можно вернуть заглушку
	}

	return (
		<button
			onClick={handleWhatsAppClick}
			className='w-[310px] lg:w-[330px] h-16 bg-[#323232] text-white py-4 px-6 rounded-[12px] font-extrabold text-base hover:opacity-90 transition-opacity'>
			Связаться с магазином
		</button>
	)
}
