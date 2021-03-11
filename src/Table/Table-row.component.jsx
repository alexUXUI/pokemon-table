import { TableCell } from "./Table-cell.component"

export const TableRow = ({
    rowIndex,
    tableRow,
}) => {

    let tableRowValues = Object.values(tableRow)

    return (
        <tr>
            {
                tableRowValues.map((tableCell, cellIndex) => {
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