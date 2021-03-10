import React, { useEffect, useState } from 'react'

export const useTableData = <Row, RowField extends keyof Row>(
    data: Row[],
    indexColumn: string
) => {

    const [tableData, setTableData] = useState({})

    useEffect(() => {
        if (data) {
            let indexedTableData = data.reduce((
                indexedData: Record<RowField, Row>,
                row: Row,
            ) => {

                let indexKey = row[indexColumn as RowField]
                let stringifiedKey = (indexKey as {}).toString()

                return {
                    ...indexedData,
                    [stringifiedKey]: {
                        ...row,
                    }
                }
            }, {} as Record<RowField, Row>)

            setTableData(indexedTableData)
        }
    }, [data])

    return { tableData }
}
