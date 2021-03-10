import { usePokemon } from './App.hook'
import { Table } from '../Table/Table.component';
import './App.css';

export function App() {

  const {
    pokemonData,
    pokemonRequestError,
    fetchingPokemonData
  } = usePokemon()

  const columnDefinitions = [
    { dataKey: 'name', displayName: 'Name' },
    { dataKey: 'height', displayName: 'Height' },
    { dataKey: 'weight', displayName: 'Weight' }
  ]

  return (
    <div className="App">
      <Table
        data={pokemonData}
        columns={columnDefinitions}
        indexColumn={'name'}
        isLoading={fetchingPokemonData}
        error={pokemonRequestError}
        id={0}
      />
    </div>
  );
}

