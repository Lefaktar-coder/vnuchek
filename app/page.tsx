import Image from "next/image";

export default function Home() {
  return (
		<div className='flex flex-col items-center justify-items-center  p-4 pb-20 gap-[50px]  mx-auto container'>
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
			<div className='text-center'>
				<h3 className='text-center uppercase font-custom text-xl sm:text-xl lg:text-3xl '>
					<p className='font-krivulya'>Готовим для вас вкусный сайт.</p>

					<p className='whitespace-nowrap font-krivulya'>Осталось чуть-чуть!</p>
				</h3>
			</div>
		</div>
	)
}
