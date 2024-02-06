import React, { useState, ReactNode } from 'react';
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { CSVLink } from 'react-csv';

interface DataTableProps {
  data: [];
  // biome-ignore lint: idk the type for this
  columns: any;
  report?: boolean;
  pageSize?: number;
}

export default function DataTable({
  data,
  columns,
  report,
  pageSize = 20,
}: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    initialState: {
      pagination: { pageSize: pageSize },
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const renderCSVLink = () => (
    <CSVLink data={data} filename="data.csv">
      Descargar CSV
    </CSVLink>

  );

  function TableHeader({ children, ...restProps }: { children: ReactNode }) {
    return (
      <th
        className="rounded-sm border border-slate-400 bg-slate-300 p-1 text-left text-xs font-bold"
        {...restProps}
      >
        {children}
      </th>
    );
  }

  function DataCell({ children }: { children: ReactNode }) {
    return <td className="border border-slate-400 p-1 text-xs">{children}</td>;
  }

  if (data.length <= 0) {
    return (
      <div className="w-full rounded-lg bg-white p-2 text-center">
        La tabla esta vacia
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg bg-white p-2">
      {report && <div className="flex justify-end">{renderCSVLink()}</div>}
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHeader key={header.id}
                    // @ts-ignore
                    colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </TableHeader>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <DataCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </DataCell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
      <div className="flex items-center gap-2 ">
        <button
          type="button"
          className="rounded border p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          type="button"
          className="rounded border p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          type="button"
          className="rounded border p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          type="button"
          className="rounded border p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        {/* <span className='flex items-center gap-1'>
					| Go to page:
					<input
						type='number'
						defaultValue={table.getState().pagination.pageIndex + 1}
						onChange={(e) => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0;
							table.setPageIndex(page);
						}}
						className='w-16 rounded border p-1'
					/>
				</span> */}
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
// TODO: Finish all the pagination controlled by user
