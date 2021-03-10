import React from 'react'
import { render } from '@testing-library/react'
import { Table } from './Table.component'

xdescribe('<Table /> Test Suite:', () => {
    it('Should render and have the correct markup with no data', () => {
        const { getByTestId } = render(
            <Table
                columns={[]}
                id={0}
                data={[]}
                indexColumn={''}
            />
        )

        getByTestId('table-0')
        getByTestId('table-0-headers')
        getByTestId('table-0-body')
    })

    it('Should render and have the correct markup with data', () => {
        const { getByTestId, getAllByTestId, container } = render(
            <Table
                columns={[
                    { dataKey: 'name', displayName: 'Name' }
                ]}
                id={0}
                data={[
                    { name: 'Charizard' }
                ]}
                indexColumn={'name'}
            />
        )

        console.log(container.innerHTML)

        getByTestId('table-0-header-cell-0')
    })
})