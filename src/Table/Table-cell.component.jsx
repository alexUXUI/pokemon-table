import { FC } from "react";

export const TableCell = ({
    cellIndex,
    tableCell
}) => (
    <td key={cellIndex}>{tableCell}</td>
)