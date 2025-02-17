import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('min-h-[70px] hidden sm:flex', className)}>
			<header className='text-center sr-only'>Header</header>
		</div>
	)
}
