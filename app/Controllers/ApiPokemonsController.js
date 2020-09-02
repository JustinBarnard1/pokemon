import { ProxyState } from "../AppState.js";
import apiPokemonsService from "../Services/ApiPokemonsService.js";


//Private
function _drawApiPokemon() {
    let pokemon = ProxyState.apiPokemons;
    let template = ''
    pokemon.forEach(p => template += `<li onclick="app.apiPokemonsController.getDetails('${p.name}')">${p.name}</li>`)
    document.getElementById("apiPokemon").innerHTML = template
}

//Public
export default class ValuesController {
    constructor() {
        ProxyState.on("apiPokemons", _drawApiPokemon);
        this.getAllApiPokemons()
    }

    getAllApiPokemons() {
        try {
            apiPokemonsService.getAllApiPokemons()
        } catch (error) {
            console.error(error)
        }
    }

    getDetails(name) {
        try {
            apiPokemonsService.getDetails(name)
        } catch (error) {
            console.error(error)
        }
    }

}