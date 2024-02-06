import { TRole, roles } from '../constants/ui';
import React, { ReactNode, SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  restProps?: SelectHTMLAttributes<HTMLSelectElement>;
  role?: TRole;
  full?: boolean;
  label: string;
  id: string;
  required?: boolean;
  message?: string;
}

export default function Select({
  message,
  required,
  id,
  label,
  children,
  full = false,
  role = 'info',
  ...restProps
}: SelectProps) {
  const dynamic = {
    info: 'border-violet-600',
    success: 'border-emerald-600',
    caution: 'border-amber-600',
    danger: 'border-red-600',
  };
  return (
    <div className="flex flex-col items-start">
      <label
        htmlFor={`for-${id}`}
        className="my-1 block font-medium text-slate-800"
        style={{ fontSize: '10px' }}
      >
        {label}
        <sup className="text-red-700">{required && '*'}</sup>
      </label>
      <select
        {...restProps}
        id={`for-${id}`}
        className={`block ${full ? 'w-full' : 'w-fit'
          } rounded-md border p-2 text-xs focus:outline-none ${dynamic[role]
          } bg-white text-black`}
      >
        <option value="">Elige una opción</option>
        {children}
      </select>
      <small
        className={`mt-1 font-light text-${roles[role]}-700`}
        style={{ fontSize: '10px' }}
      >
        {message}
      </small>
    </div>
  );
}
