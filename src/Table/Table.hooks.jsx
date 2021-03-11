import { useEffect, useState } from 'react'

export const useTableData = (
    data,
    indexColumn
) => {

    const [tableData, setTableData] = useState('default table state')

    useEffect(async () => {

        if (data) {
            let indexedTableData = await data.reduce((indexedData, tableRow) => {

                let indexKey = tableRow[indexColumn]

                return {
                    ...indexedData,
                    [indexKey]: {
                        ...tableRow,
                    }
                }
            }, {})

            setTableData(indexedTableData)
        }

    }, [data])

    return { tableData }
}
