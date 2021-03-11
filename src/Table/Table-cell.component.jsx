export const TableCell = ({
    cellIndex,
    tableCell
}) => {
    return (
        setTimeout(() => <td key={cellIndex}>{tableCell}</td>, 120)
    )
}