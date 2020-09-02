import { ProxyState } from "../AppState.js";
import myPokemonsService from "../Services/MyPokemonsService.js";

function _drawActivePokemon() {
    let el = document.getElementById("activePokemon")
    if (ProxyState.activePokemon) {
        el.innerHTML = ProxyState.activePokemon.Template
    } else {
        el.innerHTML = ""
    }
}

function _drawMyPokemon() {
    let pokemons = ProxyState.myPokemons
    let template = ""
    pokemons.forEach(p => template += `<li onclick="app.myPokemonsController.setActive('${p._id}')">${p.name}</li>`)
    document.getElementById('myPokemon').innerHTML = template
}

export default class MyPokemonsController {
    constructor() {
        ProxyState.on("activePokemon", _drawActivePokemon)
        ProxyState.on("myPokemons", _drawMyPokemon)
        this.getMyPokemon();
    }
    getMyPokemon() {
        try {
            myPokemonsService.getMyPokemon();
        } catch (error) {
            console.error(error)
        }
    }
    setActive(_id) {
        myPokemonsService.setActive(_id)
    }
    addPokemon() {
        try {
            myPokemonsService.addPokemon()
        } catch (error) {
            console.error(error)
        }
    }
    removePokemon() {
        try {
            myPokemonsService.removePokemon()
        } catch (error) {
            console.error(error)
        }
    }
}