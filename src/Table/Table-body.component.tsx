import { TableRow } from "./Table-row.component"

interface TableBodyProps<Row, RowField extends keyof Row> {
    id: number
    tableData: Record<RowField, Row>
}

export const TableBody = <Row, RowField extends keyof Row>({
    id,
    tableData,
}: TableBodyProps<Row, RowField>): JSX.Element => {

    let tableHasData = Boolean(tableData && Object.values(tableData).length)

    if (tableHasData) {

        let tableRows = (Object.values(tableData) as Row[])

        return (
            <tbody data-testid={`table-${id}-body`}>
                {
                    tableRows.map((tableRow: Row, rowIndex: number): JSX.Element => {
                        return (
                            <TableRow
                                rowIndex={rowIndex}
                                tableRow={tableRow}
                            />
                        )
                    })
                }
            </tbody>
        )
    }

    return (
        <tbody data-testid={`table-${id}-body--loading`}>
            loading...
        </tbody>
    )

}
