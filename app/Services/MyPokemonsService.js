import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonsService {
    setActive(_id) {
        ProxyState.activePokemon = ProxyState.myPokemons.find(p => p._id == _id)
    }
    async getMyPokemon() {
        let res = await sandboxApi.get('')
        ProxyState.myPokemons = res.data.data.map(p => new Pokemon(p))
    }
    async addPokemon() {
        let res = await sandboxApi.post('', ProxyState.activePokemon)
        ProxyState.myPokemons = [...ProxyState.myPokemons, new Pokemon(res.data.data)]
    }
    async removePokemon() {
        await sandboxApi.delete(ProxyState.activePokemon._id)
        ProxyState.myPokemons = ProxyState.myPokemons.filter(p => p._id != ProxyState.activePokemon._id)
        ProxyState.activePokemon = null
    }
}

const myPokemonsService = new MyPokemonsService()
export default myPokemonsService