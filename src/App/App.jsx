import { usePokemon } from './App.hook'
import { Table } from '../Table/Table.component';
import './App.css';

export function App() {

  const {
    pokemonData,
    pokemonRequestError,
    fetchingPokemonData
  } = usePokemon()

  return (
    <div className="App">

    </div>
  );
}

