import { FC } from "react";

export interface TableCellProps {
    cellIndex: number
    tableCell: string | number
}

export const TableCell: FC<TableCellProps> = ({
    cellIndex,
    tableCell
}) => (
    <td key={cellIndex}>{tableCell}</td>
)