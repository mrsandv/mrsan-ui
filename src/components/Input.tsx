import React from 'react';
import { TRole } from '../constants/ui';
import { InputHTMLAttributes, ReactNode } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  restProps?: InputHTMLAttributes<HTMLInputElement>;
  role?: TRole;
  full?: boolean;
  label: string;
  id: string;
  required?: boolean;
  message?: string;
}

export default function Input({
  message,
  required,
  id,
  label,
  children,
  full = false,
  role = 'info',
  ...restProps
}: IInputProps) {
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
      <input
        {...restProps}
        placeholder={label}
        id={`for-${id}`}
        className={`block ${full ? 'w-full' : 'w-fit'
          } rounded-md border p-2 text-xs focus:outline-none ${dynamic[role]
          } bg-white text-black h-10`}
      />
      {message && (
        <p
          className="mt-1 font-light text-red-700"
          style={{ fontSize: '10px' }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
