import { TableCell } from "./Table-cell.component"

interface TableRowProps<Row> {
    rowIndex: number,
    tableRow: Row
}

export const TableRow = <Row,>({
    rowIndex,
    tableRow,
}: TableRowProps<Row>) => {

    let tableRowValues = Object.values(tableRow as Row)

    return (
        <tr key={rowIndex}>
            {
                tableRowValues.map((tableCell: string | number, cellIndex: number): JSX.Element => {
                    return (
                        <TableCell
                            cellIndex={cellIndex}
                            tableCell={tableCell}
                        />
                    )
                })
            }
        </tr>
    )
}