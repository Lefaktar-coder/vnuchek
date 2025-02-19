import Image from "next/image";

export default function Home() {
  return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-[50px] sm:p-20 '>
			<div className='mb-8 text-center mt-10 sm:mt-0'>
				<h1 className='sr-only'>Сытый Внучек</h1>
				<Image
					src='/logo.png'
					alt='logo'
					width={177}
					height={44}
					className='w-[177px] h-[44px] xs:w-[213px] sm:h-[52px]'
				/>
			</div>

			<Image
				src='/hero-bg.png'
				alt='у забора'
				width={470}
				height={365}
			/>
			<h3 className='text-center uppercase font-Krivulya text-xl sm:text-2xl lg:text-3xl'>
				<p className='whitespace-nowrap'>Готовим для вас вкусный сайт.</p>

				<p className='whitespace-nowrap'>Осталось чуть-чуть!</p>
			</h3>
		</div>
	)
}
