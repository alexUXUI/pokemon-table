import React from 'react'
import { render } from '@testing-library/react'
import { Table } from './Table.component'

describe('<Table /> Test Suite:', () => {
    it('Should render and have the correct markup with _no_ data', () => {
        const { getByTestId, getByText } = render(
            <Table
                columns={[]}
                id={0}
                data={undefined}
                indexColumn={''}
            />
        )

        getByTestId('table-0')
        getByTestId('table-0-headers')

        getByText('no headers')
        getByText('no data')
    })

    it('Should display the loading state if the table is loading', () => {
        const { container, getByText } = render(
            <Table
                columns={[{ dataKey: 'name', displayName: 'Name' }]}
                id={0}
                data={[]}
                indexColumn={''}
                isLoading={true}
            />
        )

        getByText('Name')
        getByText('loading...')
        console.log(container.innerHTML)
    })

    it('Should render and have the correct markup with data', () => {
        const { getByTestId } = render(
            <Table
                columns={[
                    { dataKey: 'name', displayName: 'Name' }
                ]}
                id={0}
                data={[
                    { name: 'Charizard', height: 100, weight: 1200 }
                ]}
                indexColumn={'name'}
            />
        )

        getByTestId('table-0-header-cell-0')
    })
})