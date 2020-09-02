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

export default class MyPokemonsController {
    constructor() {
        ProxyState.on("activePokemon", _drawActivePokemon)
        ProxyState.on("myPokemon", _drawMyPokemon)
        this.getMyPokemon();
    }
    getMyPokemon() {
        try {
            myPokemonsService.getMyPokemon();
        } catch (error) {
            console.error(error)
        }
    }
    setActive(name) {
        myPokemonsService.setActive(name)
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