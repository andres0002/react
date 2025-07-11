// js
// react
// third
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    type ColumnDef,
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Title,
    Badge
} from '@tremor/react';
// own
import { useAppSelector } from '../hooks/useStore';
import { useUserActions } from '../hooks/useUserActions';

// This example requires @tanstack/react-table

type User = {
    id: string;
    name: string;
    email: string;
    github: string;
};

type AlignMeta = {
    align?: 'text-left' | 'text-center' | 'text-right';
};

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

// Extendemos el tipo base y le agregamos `meta`
type CustomColumnDef<TData, TValue = unknown> = ColumnDef<TData, TValue> & {
    meta?: AlignMeta;
};

const TextButton = ({ onClick, disabled, children }: any) => {
    return (
        <button
            type="button"
            className="group rounded-tremor-small bg-tremor-background p-2 text-tremor-default shadow-tremor-input ring-1 ring-inset ring-tremor-ring hover:bg-tremor-background-muted disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-tremor-background dark:bg-dark-tremor-background dark:shadow-dark-tremor-input dark:ring-dark-tremor-ring hover:dark:bg-dark-tremor-background-muted disabled:hover:dark:bg-dark-tremor-background"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

const NumberButton = ({ active, onClick, children, position }: any) => {
    return (
        <button
            type="button"
            className={classNames(
                'min-w-[36px] rounded-tremor-small p-2 text-tremor-default text-tremor-content-strong disabled:opacity-50 dark:text-dark-tremor-content-strong',
                active
                    ? 'bg-tremor-brand font-semibold text-white dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted'
                    : 'hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background',
                position === 'left'
                    ? 'rounded-l-tremor-small'
                    : position === 'right'
                        ? 'rounded-r-tremor-small'
                        : '',
            )}
            onClick={onClick}
            aria-current={classNames(active ? 'Page' : '')}
        >
            {children}
        </button>
    );
};

const MobileButton = ({ onClick, disabled, children, position }: any) => {
    return (
        <button
            type="button"
            className={classNames(
                'group p-2 text-tremor-default ring-1 ring-inset ring-tremor-ring hover:bg-tremor-background-muted disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-tremor-background dark:ring-dark-tremor-ring hover:dark:bg-dark-tremor-background disabled:hover:dark:bg-dark-tremor-background',
                position === 'left'
                    ? 'rounded-l-tremor-small'
                    : position === 'right'
                        ? '-ml-px rounded-r-tremor-small'
                        : '',
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

function ListOfUsers() {
    const usersData = useAppSelector((state) => state.users);
    const { handleRemoveUser } = useUserActions();
    const pageSize = 10;

    const usersColumns: CustomColumnDef<User>[] = [
        {
            header: 'Id',
            accessorKey: 'id',
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'Name',
            accessorKey: 'name',
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <img
                        style={{ width: '20px', height: '20px', borderRadius: '50%', marginRight: '8px' }}
                        src={`https://unavatar.io/github/${row.original.github}`}
                        alt={row.original.name}
                    />
                    <span>{row.original.name}</span>
                </div>
            ),
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'Email',
            accessorKey: 'email',
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'GitHub',
            accessorKey: 'github',
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'Actions',
            accessorKey: 'actions',
            cell: ({ row }: any) => (
                <div className="flex gap-2">
                    <button
                        type='button'
                        className="text-blue-500 hover:underline"
                        onClick={() => console.log('Edit', row.original)}
                    >
                        Edit
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="block w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>
                    </button>
                    <button
                        type='button'
                        className="text-red-500 hover:underline"
                        onClick={() => handleRemoveUser(row.original.id)}
                    >
                        Delete
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="block w-4 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                        </svg>
                    </button>
                </div>
            ),
            meta: {
                align: 'text-left',
            },
        }
    ];

    const table = useReactTable({
        data: usersData,
        columns: usersColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: pageSize,
            },
        },
    });

    const paginationCount = table.getPageCount();
    const actualPage = table.getState().pagination.pageIndex + 1;

    return (
        <>
            <Title style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
            }}>
                Users
                <Badge style={{
                    borderRadius: '50%',
                    padding: '5px'
                }}>{usersData.length}</Badge>
            </Title>
            <Table>
                <TableHead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow
                            key={headerGroup.id}
                            className="border-b border-tremor-border dark:border-dark-tremor-border"
                        >
                            {headerGroup.headers.map((header) => (
                                <TableHeaderCell
                                    key={header.id}
                                    scope="col"
                                    className={classNames((header.column.columnDef.meta as AlignMeta)?.align)}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                </TableHeaderCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell
                                    key={cell.id}
                                    className={classNames((cell.column.columnDef.meta as AlignMeta)?.align)}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="mt-10 flex items-center justify-between sm:justify-center">
                {/* long pagination button form only for desktop view */}
                <div className="hidden gap-0.5 sm:inline-flex">
                    <TextButton
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="group"
                    >
                        <span className="sr-only">Previous</span>
                        <RiArrowLeftSLine
                            className="size-5 text-tremor-content-emphasis group-hover:text-tremor-content-strong dark:text-dark-tremor-content-emphasis group-hover:dark:text-dark-tremor-content-strong"
                            aria-hidden={true}
                        />
                    </TextButton>
                    <NumberButton
                        onClick={() => table.setPageIndex(0)}
                        active={actualPage === 1}
                    >
                        1
                    </NumberButton>
                    {actualPage > 4 ? (
                        actualPage < paginationCount - 2 ? (
                            <>
                                <NumberButton
                                    onClick={() => table.setPageIndex(actualPage - 3)}
                                    active={false}
                                >
                                    ...
                                </NumberButton>
                                <NumberButton
                                    onClick={() => table.setPageIndex(actualPage - 2)}
                                    active={actualPage === actualPage - 1}
                                >
                                    {actualPage - 1}
                                </NumberButton>
                                <NumberButton
                                    onClick={() => table.setPageIndex(actualPage - 1)}
                                    active={true}
                                >
                                    {actualPage}
                                </NumberButton>
                                <NumberButton
                                    onClick={() => table.setPageIndex(actualPage)}
                                    active={actualPage === actualPage + 1}
                                >
                                    {actualPage + 1}
                                </NumberButton>
                                <NumberButton
                                    onClick={() => table.setPageIndex(actualPage + 1)}
                                    active={false}
                                >
                                    ...
                                </NumberButton>
                            </>
                        ) : (
                            <>
                                <NumberButton
                                    onClick={() => table.setPageIndex(1)}
                                    active={false}
                                >
                                    2
                                </NumberButton>
                                <NumberButton
                                    onClick={() => table.setPageIndex(paginationCount - 5)}
                                    active={false}
                                >
                                    ...
                                </NumberButton>
                                <NumberButton
                                    onClick={() => table.setPageIndex(paginationCount - 4)}
                                    active={actualPage === paginationCount - 3}
                                >
                                    {paginationCount - 3}
                                </NumberButton>
                                <NumberButton
                                    onClick={() => table.setPageIndex(paginationCount - 3)}
                                    active={actualPage === paginationCount - 2}
                                >
                                    {paginationCount - 2}
                                </NumberButton>
                                <NumberButton
                                    onClick={() => table.setPageIndex(paginationCount - 2)}
                                    active={actualPage === paginationCount - 1}
                                >
                                    {paginationCount - 1}
                                </NumberButton>
                            </>
                        )
                    ) : (
                        <>
                            <NumberButton
                                onClick={() => table.setPageIndex(1)}
                                active={actualPage === 2}
                            >
                                2
                            </NumberButton>
                            <NumberButton
                                onClick={() => table.setPageIndex(2)}
                                active={actualPage === 3}
                            >
                                3
                            </NumberButton>
                            <NumberButton
                                onClick={() => table.setPageIndex(3)}
                                active={actualPage === 4}
                            >
                                4
                            </NumberButton>
                            <NumberButton
                                onClick={() => table.setPageIndex(4)}
                                active={false}
                            >
                                ...
                            </NumberButton>
                            <NumberButton
                                onClick={() => table.setPageIndex(paginationCount - 2)}
                                active={false}
                            >
                                {paginationCount - 1}
                            </NumberButton>
                        </>
                    )}
                    <NumberButton
                        onClick={() => table.setPageIndex(paginationCount - 1)}
                        active={actualPage === paginationCount}
                    >
                        {paginationCount}
                    </NumberButton>
                    <TextButton
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="group"
                    >
                        <span className="sr-only">Next</span>
                        <RiArrowRightSLine
                            className="size-5 text-tremor-content-emphasis group-hover:text-tremor-content-strong dark:text-dark-tremor-content-emphasis group-hover:dark:text-dark-tremor-content-strong"
                            aria-hidden={true}
                        />
                    </TextButton>
                </div>
                <p className="text-tremor-default tabular-nums text-tremor-content dark:text-dark-tremor-content sm:hidden">
                    Page of{' '}
                    <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">{`${table.getState().pagination.pageIndex + 1
                        }`}</span>{' '}
                    of
                    <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        {' '}
                        {`${table.getPageCount()}`}
                    </span>
                </p>
                {/*  */}
                <div className="inline-flex items-center rounded-tremor-small shadow-tremor-input dark:shadow-dark-tremor-input sm:hidden">
                    <MobileButton
                        position="left"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">Previous</span>
                        <RiArrowLeftSLine
                            className="size-5 text-tremor-content-emphasis group-hover:text-tremor-content-strong dark:text-dark-tremor-content-emphasis group-hover:dark:text-dark-tremor-content-strong"
                            aria-hidden={true}
                        />
                    </MobileButton>
                    <MobileButton
                        position="right"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">Next</span>
                        <RiArrowRightSLine
                            className="size-5 text-tremor-content-emphasis group-hover:text-tremor-content-strong dark:text-dark-tremor-content-emphasis group-hover:dark:text-dark-tremor-content-strong"
                            aria-hidden={true}
                        />
                    </MobileButton>
                </div>
            </div>
        </>
    );
}

export default ListOfUsers;