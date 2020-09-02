import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js"

class ApiPokemonsService {
    async getAllApiPokemons() {
        let res = await pokeApi.get('')
        ProxyState.apiPokemons = res.data.results
    }

    async getDetails(name) {
        let res = await pokeApi.get(name)
        ProxyState.activePokemon = new Pokemon(res.data)
        console.log(res.data)
    }



}

const apiPokemonsService = new ApiPokemonsService()
export default apiPokemonsService