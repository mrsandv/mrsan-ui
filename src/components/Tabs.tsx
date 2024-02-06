import React, { ReactNode, useState } from 'react';

interface ITabsTypes {
  elements: { key: number; label: string; component: ReactNode }[];
}

export default function Tabs({ elements }: ITabsTypes) {
  const [active, setActive] = useState(0);

  const handleSelection = (index: number) => {
    setActive(index);
  };

  return (
    <div className="w-full">
      <div className="flex">
        {elements.map((el) => (
          <div
            onClick={() => {
              handleSelection(el.key);
            }}
            className={`m-1 w-fit  overflow-hidden overflow-ellipsis ${el.key === active ? 'border-b-2' : 'cursor-pointer'
              } p-2 text-slate-200`}
            key={el.key}
          >
            {el.label}
          </div>
        ))}
      </div>
      <div className="m-2 flex h-5/6 flex-wrap p-2">
        {elements[active].component}
      </div>
    </div>
  );
}
