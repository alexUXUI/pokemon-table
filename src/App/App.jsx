import { usePokemon } from './App.hook'
import './App.css';

export function App() {

  const {
    pokemonData,
    pokemonRequestError,
    fetchingPokemonData
  } = usePokemon()

  return (
    <div className="App">
      Hello world 🌍
    </div>
  );
}

