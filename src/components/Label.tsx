import React from 'react';
import { icons } from '../constants/ui';

interface LabelTypes {
  label: string;
  value: string;
  full?: boolean;
  cb?: () => void;
}

export default function Label({ label, value, cb, full = false }: LabelTypes) {
  const handleSave = () => {
    navigator.clipboard.writeText(value);
    if (cb) cb()
  };

  return (
    <div
      className={`my-2 flex items-center justify-between rounded-md bg-slate-200 p-2 text-black ${full ? 'w-full' : 'w-fit'
        }`}
    >
      <div className="w-full">
        <p className="text-sm font-semibold">{label}</p>
        <p className="w-full overflow-hidden overflow-ellipsis bg-slate-200 text-xs">
          {value ? value : '-'}
        </p>
      </div>
      <div onClick={handleSave}>{icons.copy}</div>
    </div>
  );
}
