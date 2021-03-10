export const TableHeader = ({
    id,
    tableColumns
}) => {

    let tableHasColumnDefinitions = tableColumns?.length

    if (tableHasColumnDefinitions) {
        return (
            <thead data-testid={`table-${id}-headers`}>
                <tr>
                    {
                        tableColumns.map((column, index) => {
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
            <tr>
                <th>
                    no headers
                </th>
            </tr>
        </thead>
    )
}