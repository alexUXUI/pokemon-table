import { Component } from 'react'

export class TableHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        let { tableColumns, id } = this.props

        let tableHasColumnDefinitions = tableColumns?.length

        if (tableHasColumnDefinitions) {

            console.log(tableHasColumnDefinitions)

            return (
                <thead data-testid={`table-${id}-headers`}>
                    <span>
                        {
                            tableColumns.map((column, index) => {
                                return (
                                    <th data-testid={"table" + "-" + id + "-" + "header-cell" + "-" + index}>
                                        {column.displayName}
                                    </th>
                                )
                            })
                        }
                    </span>
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
}