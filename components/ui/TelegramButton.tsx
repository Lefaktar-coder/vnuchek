'use client'


interface TelegramButtonProps {
	username?: string // Telegram username без @ символа
}

export default function TelegramButton({
	username = '+bKkICkEIF9NlMWFi',
}: TelegramButtonProps) {
	const handleTelegramClick = () => {
		const telegramUrl = `https://t.me/${username}`
		window.open(telegramUrl, '_blank', 'noopener,noreferrer')
	}

	return (
		<button
			onClick={handleTelegramClick}
			className='w-[60px] h-[60px] bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] 
                 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow
                 flex items-center justify-center'
			aria-label='Открыть чат в Telegram'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'>
				<path
					d='M20.3764 4.18185L2.65732 10.7098C1.94427 11.0138 1.7031 11.6226 2.48497 11.953L7.03067 13.3331L18.0216 6.84361C18.6217 6.43621 19.2361 6.54485 18.7074 6.99301L9.2677 15.1586L8.97118 18.6142C9.24583 19.1478 9.74872 19.1503 10.0695 18.8851L12.6811 16.5242L17.154 19.7241C18.1929 20.3117 18.7581 19.9325 18.9816 18.8555L21.9154 5.58366C22.22 4.25803 21.7006 3.67395 20.3764 4.18185Z'
					fill='#323232'
				/>
			</svg>
		</button>
	)
}
