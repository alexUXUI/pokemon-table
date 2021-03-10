import { useState, useEffect } from 'react'
import { getPokemonListData, getPokemonDetailData } from '../API'

export const usePokemon = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonRequestError, setPokemonRequestError] = useState(undefined)
    const [fetchingPokemonData, setFetchingPokemonData] = useState(false)

    useEffect(() => {
        if (!pokemonData.length) {

            setFetchingPokemonData(true)

            getPokemonListData().then(pokemonList => {

                let { data: { results } } = pokemonList

                getPokemonDetailData(results)
                    .then(setPokemonData)
                    .catch(setPokemonRequestError)
                    .finally(() => setFetchingPokemonData(false))

            }).catch(e => {
                setPokemonData(undefined)
                setFetchingPokemonData(false)
                setPokemonRequestError(JSON.stringify(e))
            })
        }
    })

    return {
        pokemonData,
        pokemonRequestError,
        fetchingPokemonData
    }
}