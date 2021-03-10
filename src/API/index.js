import axios from 'axios'

export const API = axios.create();

API.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=200'

export const getPokemonListData = () => {
    return API.get(pokemonListUrl)
}

export const getPokemonDetailData = (results) => {
    if (results?.length) {

        let urls = results.map(({ url }) => url)
        let requests = urls.map((url) => axios.get(url))

        return Promise.all(requests).then((pokemonResponse) => {

            let pokemonDataSubset = pokemonResponse.map(({ data }) => {
                const { name, height, weight } = data
                return { name, height, weight }
            })

            return Promise.resolve(pokemonDataSubset)
        })
    }

    return Promise.resolve([])
}