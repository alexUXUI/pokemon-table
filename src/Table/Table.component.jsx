import './Table.css'

import { useState } from 'react'
import { useTableData } from './Table.hooks'

import { TableHeader } from './Table-headers.component'
import { TableRow } from "./Table-row.component"

export const Table = ({
    id,
    data,
    columns,
    indexColumn,
    isLoading
}) => {

    const { tableData } = useTableData(data, indexColumn)

    const [tableColumns] = useState(columns)

    return (
        <table data-testid={`table-${id}`} id="table" class="table">
            <TableHeader
                id={id}
                tableColumns={tableColumns}
            />
            <TableBody
                id={id}
                tableData={tableData}
                isLoading={isLoading}
            />
        </table>
    )
}

export const TableBody = ({
    id,
    tableData,
    isLoading
}) => {

    let tableHasData = Boolean(tableData && Object.values(tableData).length)

    if (isLoading && true) {
        return (
            <div data-testid={`table-${id}-body--no-data`}>
                <tr>
                    <td>
                        loading...
                    </td>
                </tr>
            </div>
        )
    }

    if (tableHasData) {

        let tableRows = Object.values(tableData)

        return (
            <div data-testid={`table-${id}-body`} aria-runtime="passive" style={{
                maxHeight: '50px',
                overflow: 'hidden'
            }}>
                {
                    tableRows.map((tableRow, rowIndex) => {
                        return (
                            <TableRow
                                rowIndex={rowIndex}
                                tableRow={tableRow}
                            />
                        )
                    })
                }
            </div >
        )
    }

    if (!isLoading && !tableHasData) {
        return (
            <div data-testid={`table-${id}-body--loading`}>
                <tr>
                    <td>
                        no data
                    </td>
                </tr>
            </div>
        )
    }
}

