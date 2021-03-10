import { useEffect, useState } from 'react';
import './App.css';
import { Table } from '../Table/Table.component';
import axios, { AxiosPromise } from 'axios'

export const API = axios.create({
  timeout: 1000,
});

API.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

interface PokemonAPIResponse {
  data: Pokemon
}

interface Pokemon {
  name: string
  height: number
  weight: number
}

interface PokemonListItem {
  name: string
  url: string
}

const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1&offset=200'

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonAPIResponse[]>([])
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([])
  const [requestError, setRequestError] = useState<undefined | string>(undefined)

  useEffect(() => {
    if (!pokemon?.length) {
      API.get(pokemonListUrl).then(pokemonList => {

        const { data: { results } } = pokemonList

        if (results?.length) {
          let urls: string[] = results.map(({ name, url }: PokemonListItem) => url)
          let requests: AxiosPromise[] = urls.map((url: string) => axios.get(url))

          Promise.all(requests).then(pokemondata => {
            setPokemon(pokemondata)
          })
        }
      }).catch(e => {
        setRequestError(JSON.stringify(e))
      })
    }
  })

  useEffect(() => {
    if (pokemon?.length) {
      const pokemonDataSubset = pokemon.map((individualPokemon: PokemonAPIResponse): Pokemon => {
        const { name, height, weight } = individualPokemon.data
        return {
          name,
          height,
          weight
        }
      })

      setPokemonData(pokemonDataSubset)
    }
  }, [pokemon])

  return {
    pokemonData,
    requestError
  }
}

function App() {
  const { pokemonData, requestError } = usePokemon()

  if (requestError) {
    return (
      <div>REQUEST ERROR </div>
    )
  }

  return (
    <div className="App">
      <Table
        columns={[
          { dataKey: 'name', displayName: 'Name' },
          { dataKey: 'height', displayName: 'Height' },
          { dataKey: 'weight', displayName: 'Weight' }
        ]}
        id={0}
        data={pokemonData}
        indexColumn={'name'}
      />
    </div>
  );
}

export default App;

