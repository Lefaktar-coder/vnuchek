import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import WhatsAppButton from '../ui/WhatsAppButton'
import PhoneButton from '../ui/PhoneButton'
import TelegramButton from '../ui/TelegramButton'
import Link from 'next/link'

interface Props {
	className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
	const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ''
	return (
		<div className={cn('bg-[#f2f2f2] min-h-[307px]', className)}>
			<div className='footer-container max-w-[310px] sm:max-w-[953px] mx-auto flex-row sm:flex gap-12 items-center sm:gap-52'>
				<div className='info-items mt-8 sm:mt-[67px]'>
					<div className='flex items-center  gap-2'>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'>
								<path
									d='M17.4759 13.356C18.9698 10.7642 19.9927 7.5746 18.3876 4.81964C16.4834 1.55106 12.1048 0.800313 8.79539 2.4346C4.62801 4.49241 4.13439 8.85747 5.43899 12.6959C5.50226 12.8823 5.63006 12.9994 5.77996 13.0594C7.21687 15.715 9.41179 18.0151 10.2933 20.9164C10.3363 21.058 10.44 21.1723 10.568 21.2496C10.1148 21.2534 9.67743 21.2069 9.37413 21.0373C8.67588 20.647 8.04467 21.6721 8.74041 22.061C9.5775 22.5289 10.8186 22.3925 11.7403 22.348C12.891 22.2922 14.1664 22.2009 15.2498 21.8047C15.9965 21.5318 15.6722 20.385 14.9162 20.6615C14.0055 20.9944 12.9884 21.0724 12.0237 21.1448C11.8196 21.1602 11.569 21.1874 11.3011 21.2107C11.3145 21.1988 11.3298 21.1915 11.3423 21.178C13.6055 18.7339 15.8256 16.2194 17.4759 13.356ZM6.58616 11.9228C6.5475 11.8441 6.49854 11.7841 6.4438 11.7369C6.00668 10.2691 5.79853 8.77945 6.17013 7.25993C6.64592 5.31501 8.34722 3.82086 10.2529 3.09192C13.4295 1.87664 17.1804 3.77462 17.8862 6.92131C18.4606 9.48254 16.7912 12.2619 15.4098 14.3359C14.1624 16.2092 12.671 17.9243 11.1392 19.5966C10.0073 16.8587 7.89327 14.591 6.58616 11.9228Z'
									fill='#323232'
								/>
								<path
									d='M13.7801 10.2041C15.0252 9.19487 14.9315 7.31657 14.0593 6.11907C12.8366 4.4402 10.7679 4.86229 9.28281 5.95355C9.03223 6.1378 9.01993 6.3773 9.13316 6.57317C8.61318 7.23168 8.38194 8.06684 8.66239 8.96604C9.23234 10.791 12.3231 11.3852 13.7801 10.2041ZM12.9754 6.71758C13.4848 7.35285 13.7075 8.45953 13.1456 9.13203C12.4042 10.0191 10.484 9.65063 9.92782 8.76495C9.14471 7.51789 10.9746 6.36521 12.0703 6.3332C12.1858 6.32988 12.2827 6.30071 12.3653 6.25684C12.5867 6.34434 12.7941 6.4916 12.9754 6.71758Z'
									fill='#323232'
								/>
							</svg>
						</span>
						<h3 className='font-[#323232] text-base sm:text-xl font-bold'>
							Краснодар, Восточно-Кругликовская 22/3
						</h3>
					</div>
					<div className='grid grid-cols-2 items-center  mt-10'>
						<div className='border-[#dfdfdf] border-b-2 border-r-2  h-full pl-1 '>
							<p className='text-[#8f8f8f] font-font-geist-sans text-sm font-bold  pt-1'>
								Ежедневно
							</p>
							<p>08:00 - 20:00</p>
						</div>
						<div className='border-[#dfdfdf] border-b-2 sm:pb-1 pb-2 flex'>
							<p className='text-[#8f8f8f] font-font-geist-sans text-xs sm:text-sm font-bold pr-2 sm:pr-[18px] pl-2 sm:pl-[22px] pt-1'>
								Смотреть в
							</p>
							<Link
								href='https://yandex.ru/maps/-/CHq-yKK8'
								target='_blank'
								className='mr-2 text-[#8f8f8f] font-font-geist-sans text-[10px] font-bold flex flex-col items-center gap-1 sm:gap-2'>
								<Image
									src='/yandex.png'
									width={40}
									height={40}
									className='w-[36px] h-[36px] xs:w-[40px] sm:h-[40px]'
									alt='yandex-button'
								/>
								Яндекс
							</Link>
							<Link
								target='_blank'
								href='https://go.2gis.com/LBqva'
								className='text-[#8f8f8f] font-font-geist-sans text-[10px] uppercase font-bold flex flex-col items-center gap-1 sm:gap-2'>
								<Image
									src='/2gis.png'
									width={40}
									height={40}
									className='w-[36px] h-[36px] xs:w-[40px] sm:h-[40px]'
									alt='2gis-button'
								/>
								2Гис
							</Link>
						</div>
					</div>
				</div>
				<div className='footer-buttons flex flex-col items-center gap-4 justify-center mt-8 sm:mt-[67px]'>
					<div className='flex gap-4 items-center justify-center'>
						<PhoneButton />
						<TelegramButton username='+bKkICkEIF9NlMWFi' />
					</div>
					<WhatsAppButton phoneNumber={phoneNumber} />
				</div>
			</div>
		</div>
	)
}
