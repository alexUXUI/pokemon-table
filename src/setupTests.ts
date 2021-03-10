// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter'
import { API } from './App/App';
import { MockPokemonList, MockPokemonDetail } from './Mocks/Pokemon.mock';

export const mockAdapter: MockAdapter = new MockAdapter(API)

const initializeMocks = (): void => {

    mockAdapter
        .onGet('https://pokeapi.co/api/v2/pokemon?limit=1&offset=200')
        .reply(200, MockPokemonList)

    mockAdapter
        .onGet('https://pokeapi.co/api/v2/pokemon/201/')
        .reply(200, MockPokemonDetail)

}

beforeEach(() => initializeMocks())

afterEach(() => mockAdapter.reset())