import { useState } from 'react'
import { useTableData } from './Table.hooks'

import { TableBody } from './Table-body.component'
import { TableHeader } from './Table-headers.component'

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
        <table data-testid={`table-${id}`}>
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