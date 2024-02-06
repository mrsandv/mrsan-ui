import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { ReactNode, useEffect } from 'react';

const sizes = {
  auto: 'h-fit w-fit',
  sm: 'h-fit w-[20vw]',
  md: 'h-fit w-[40vw]',
  lg: 'h-fit w-[60vw]',
  full: 'h-[90vh] w-[90vw]',
};

interface DialogTypes {
  children?: ReactNode;
  title: string;
  status: boolean;
  handleStatus: () => void;
  actions?: ReactNode;
  size?: 'auto' | 'sm' | 'md' | 'lg' | 'full';
}

export default function Modal({
  children,
  title,
  status,
  handleStatus,
  actions,
  size = 'auto',
}: DialogTypes) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && status) {
        handleStatus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [status, handleStatus]);
  return (
    <>
      {status && (
        <div
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'rgba(0,0,0,.44)' }}
          onClick={handleStatus}
        >
          <div
            className={`flex flex-col rounded-lg bg-slate-50 p-4 ${sizes[size]}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="w-4/5 truncate text-left text-sm font-bold">
                {title}
              </span>
              <XCircleIcon
                className="h-6 w-6 cursor-pointer hover:text-red-700"
                onClick={handleStatus}
              />
            </div>
            {children}
            {actions && <div className="mt-5 w-full">{actions}</div>}
          </div>
        </div>
      )}
    </>
  );
}
