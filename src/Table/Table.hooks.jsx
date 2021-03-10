import { useEffect, useState } from 'react'

export const useTableData = (
    data,
    indexColumn
) => {

    const [tableData, setTableData] = useState({})

    useEffect(() => {

        if (data) {
            let indexedTableData = data.reduce((indexedData, tableRow) => {


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
