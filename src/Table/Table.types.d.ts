export interface TableColumn<Row, RowField extends keyof Row> {
    displayName: string
    dataKey: RowField | string
}