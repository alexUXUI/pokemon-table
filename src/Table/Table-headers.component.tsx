import { TableColumn } from "./Table.types"

export interface TableHeaderProps<Row, RowField extends keyof Row> {
    id: number
    tableColumns: TableColumn<Row, RowField>[]
}

export const TableHeader = <Row, RowField extends keyof Row>({
    id,
    tableColumns
}: TableHeaderProps<Row, RowField>): JSX.Element => {

    let tableHasColumnDefinitions = tableColumns?.length

    if (tableHasColumnDefinitions) {
        return (
            <thead data-testid={`table-${id}-headers`}>
                <tr>
                    {
                        tableColumns.map((column: TableColumn<Row, RowField>, index: number): JSX.Element => {
                            return (
                                <th key={index} data-testid={`table-${id}-header-cell-${index}`}>
                                    {column.displayName}
                                </th>
                            )
                        })
                    }
                </tr>
            </thead>
        )
    }

    return (
        <thead data-testid={`table-${id}-headers`}>
            no headers
        </thead>
    )
}