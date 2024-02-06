import { TIcons, icons } from '../constants/ui';
import React, { ReactNode } from 'react';

interface CardProps {
  media?: string;
  title: string;
  body: string | ReactNode;
  actions?: ReactNode;
  badge?: TIcons;
}

export default function Card({
  media,
  title,
  body,
  actions,
  badge,
}: CardProps) {
  return (
    <div className="relative m-2 flex w-52 flex-col justify-between items-center rounded-md bg-slate-100 p-4">
      {badge && <div className="absolute right-2 top-2 ">{icons[badge]}</div>}
      <p className="my-1 overflow-hidden overflow-ellipsis text-sm font-medium text-left w-full">
        {title}
      </p>
      {media && (
        <div
          className="relative flex h-32 w-32  bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url("${media}")` }}
        />
      )}
      {typeof body === 'string' ? (
        <p className="my-3 break-words text-xs font-light text-left w-full">
          {body}
        </p>
      ) : (
        <div>{body}</div>
      )}
      <div className="my-1 flex h-6 w-full justify-between">{actions}</div>
    </div>
  );
}
