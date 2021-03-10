import { useState } from 'react'
import { useTableData } from './Table.hooks'

import { TableBody } from './Table-body.component'
import { TableHeader } from './Table-headers.component'
import { TableColumn } from './Table.types'

export interface TableProps<Row, RowField extends keyof Row> {
    id: number
    data: Row[]
    columns: TableColumn<Row, RowField>[]
    indexColumn: string
}

export const Table = <Row, RowField extends keyof Row>({
    id,
    data,
    columns,
    indexColumn
}: TableProps<Row, RowField>): JSX.Element => {

    const { tableData } = useTableData(data, indexColumn)

    const [tableColumns] = useState<TableColumn<Row, RowField>[]>(columns)

    return (
        <table data-testid={`table-${id}`}>
            <TableHeader
                id={id}
                tableColumns={tableColumns}
            />
            <TableBody
                id={id}
                tableData={tableData}
            />
        </table>
    )
}