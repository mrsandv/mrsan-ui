import { TIcons, TRole, icons } from '../constants/ui';
import React, { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: TIcons;
	children?: ReactNode;
	restProps?: ButtonHTMLAttributes<HTMLButtonElement>;
	role?: TRole;
	full?: boolean;
	center?: boolean;
	onClick?:MouseEventHandler<HTMLButtonElement>
}

export default function Button({
	icon,
	children,
	onClick,
	full = false,
	center = false,
	role = 'info',
	...restProps
}: ButtonProps) {
	const dynamic = {
		info: 'border-violet-600 bg-violet-500 hover:bg-violet-600 text-slate-200 hover:text-slate-800',
		success:
			'border-emerald-600 bg-emerald-500 hover:bg-emerald-600 text-slate-800 hover:text-slate-200',
		caution:
			'border-amber-600 bg-amber-500 hover:bg-amber-600 text-slate-800 hover:text-slate-200',
		danger:
			'border-red-600 bg-red-500  hover:bg-red-600 text-slate-800 hover:text-slate-200',
	};

	const base =
		'flex items-center rounded-md border-2 p-2 shadow-lg h-10 font-semibold';
	const attr = `${full ? 'w-full' : 'w-fit'} ${
				center ? 'justify-center' : 'justify-start'
	}`;
	const disabled =
		'disabled:transform-none disabled:border-slate-500 disabled:bg-slate-300 disabled:font-bold disabled:text-slate-800';
	const hover = 'hover:font-semibold ';
	const darkMode = '';

	return (
		<button
			type="button"
			{...restProps}
			onClick={onClick}
			className={`${base} ${disabled} ${attr} ${darkMode} ${dynamic[role]} ${hover}`}
		>
			{/* @ts-ignore */}
			{icons[icon]}
			{children && <span className="mx-2 text-sm">{children}</span>}
		</button>
	);
}
