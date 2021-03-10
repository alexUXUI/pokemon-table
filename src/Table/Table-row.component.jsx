import { TableCell } from "./Table-cell.component"

export const TableRow = ({
    rowIndex,
    tableRow,
}) => {

    let tableRowValues = Object.values(tableRow)

    return (
        <tr key={rowIndex}>
            {
                tableRowValues.map((tableCell, cellIndex) => {
                    return (
                        <TableCell
                            cellIndex={cellIndex}
                            tableCell={tableCell}
                            key={`${tableCell}-${cellIndex}`}
                        />
                    )
                })
            }
        </tr>
    )
}