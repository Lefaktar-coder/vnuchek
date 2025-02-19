'use client'


export default function PhoneButton() {
	const phoneNumber = '+79282063634'
	const formattedPhone = '+ 7 (928) 206-36-34'

	const handleCall = () => {
		window.location.href = `tel:${phoneNumber}`
	}

	return (
		<button
			onClick={handleCall}
			className='w-[234px] sm:w-[254px] h-[60px] bg-white text-black py-4 px-6 rounded-[12px] font-medium 
                 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                 transition-shadow flex items-center justify-center gap-2'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'>
				<path
					d='M7.77204 2.43899L8.84904 2.09499C9.85704 1.77299 10.935 2.29399 11.367 3.31199L12.227 5.33999C12.602 6.22299 12.394 7.26199 11.713 7.90799L9.82004 9.70599C9.93671 10.782 10.298 11.841 10.904 12.883C11.4803 13.8909 12.2525 14.7732 13.175 15.478L15.451 14.718C16.313 14.431 17.252 14.762 17.781 15.539L19.013 17.349C19.629 18.253 19.518 19.499 18.755 20.265L17.937 21.086C17.123 21.903 15.961 22.2 14.885 21.864C12.3464 21.072 10.012 18.721 7.88204 14.811C5.74937 10.8943 4.99671 7.57166 5.62404 4.84299C5.88804 3.69499 6.70604 2.77999 7.77404 2.43899'
					fill='#323232'
				/>
			</svg>
			<span className='font-[#323232] text-base font-extrabold'>
				{formattedPhone}
			</span>
		</button>
	)
}
