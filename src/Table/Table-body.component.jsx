import { TableRow } from "./Table-row.component"

export const TableBody = ({
    id,
    tableData,
    isLoading
}) => {

    let tableHasData = Boolean(tableData && Object.values(tableData).length)

    if (isLoading) {
        return (
            <tbody data-testid={`table-${id}-body--loading`}>
                <tr>
                    <td>
                        loading...
                    </td>
                </tr>
            </tbody>
        )
    }

    if (tableHasData) {

        let tableRows = Object.values(tableData)

        return (
            <tbody data-testid={`table-${id}-body`}>
                {
                    tableRows.map((tableRow, rowIndex) => {
                        return (
                            <TableRow
                                rowIndex={rowIndex}
                                tableRow={tableRow}
                                key={`${tableRow.name}-${rowIndex}`}
                            />
                        )
                    })
                }
            </tbody>
        )
    }

    if (!isLoading && !tableHasData) {
        return (
            <tbody data-testid={`table-${id}-body--loading`}>
                <tr>
                    <td>
                        no data
                    </td>
                </tr>
            </tbody>
        )
    }


}
