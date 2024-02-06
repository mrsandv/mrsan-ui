import React from 'react';
import { TRole } from '../constants/ui';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  message?: string;
  restProps?: React.InputHTMLAttributes<HTMLInputElement>;
  role?: TRole;
  id: string;
  required?: boolean;
}

export default function Checkbox({
  required,
  label,
  role = 'info',
  id,
  message,
  ...restProps
}: CheckboxProps) {
  const dynamic = {
    info: 'bg-violet-500',
    success: 'bg-violet-500',
    danger: 'bg-violet-500',
    caution: 'bg-violet-500',
  };

  return (
    <div className="my-4">
      <div className="flex items-center p-2">
        <input
          {...restProps}
          required={required}
          id={`for-${id}`}
          type="checkbox"
          value=""
          className={`h-4 w-4 rounded border-gray-300 bg-gray-100 ${dynamic[role]} focus:outline-none`}
        />
        <label
          htmlFor={`for-${id}`}
          className="ml-2 text-xs font-medium text-gray-900 "
        >
          {label}
          <sup className="text-red-700">{required && '*'}</sup>
        </label>
      </div>
      {message && (
        <p className="mt-1 font-light" style={{ fontSize: '10px' }}>
          {message}
        </p>
      )}
    </div>
  );
}
