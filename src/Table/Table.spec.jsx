import React from 'react'
import { render } from '@testing-library/react'
import { Table } from './Table.component'

beforeAll(() => {
    console.log('Init')
})

afterEach(() => {
    jest.retryTimes(20)
})

describe('<Table /> Test Suite:', () => {
    it('Should render and have the correct markup with _no_ data', async () => {
        const { getByTestId, getByText } = render(
            <Table
                columns={[]}
                id={0}
                data={undefined}
                indexColumn={''}
            />
        )

        await getByTestId('table-0')
        getByTestId('table-0-headers')

        getByText('no headers')
        getByText('no data')

        document.querySelector(`[data-testid=table-0-headers]`)
    })

    it('Should display the loading state if the table is loading', () => {
        const { container, getByText, getByDisplayValue, getByRole, getByPlaceholderText } = render(
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
    })

    xit('Should render and have the correct markup with data', () => {
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

        document.querySelector(`[data-testid=table-0-header-cell-0]`)
    })
})