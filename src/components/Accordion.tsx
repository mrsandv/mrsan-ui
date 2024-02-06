import React, { ReactNode, useState } from 'react';
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/24/outline';

interface AccordionProps {
  title: string;
  initClosed?: boolean;
  children: ReactNode;
}

export default function Accordion({
  title,
  children,
  initClosed = false,
}: AccordionProps) {
  const [open, setOpen] = useState(!initClosed);
  return (
    <div
      className={`m-4 flex ${open ? 'h-fit ' : ''} flex-col overflow-y-scroll`}
    >
      <div
        className={`flex h-12 items-center justify-between rounded-t-md ${open ? '' : 'rounded-b-md'
          } cursor-pointer bg-slate-700 px-2`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p className="text-base text-slate-200">{title}</p>
        {open ? (
          <ChevronDoubleUpIcon className="h-5 w-5 text-violet-200 hover:text-violet-500" />
        ) : (
          <ChevronDoubleDownIcon className="h-5 w-5 text-violet-200 hover:text-violet-500" />
        )}
      </div>
      {open && <div className="rounded-b-md bg-slate-400 p-2">{children}</div>}
    </div>
  );
}
