export default class Pokemon {
    constructor(_id = "", id, name, stats, abilities, types, url) {
        this._id = _id
        this.id = id
        this.name = name
        this.stats = stats
        this.abilities = abilities
        this.types = types
        this.url = url
    }

    get Template() {
        return `
    <div class="card-body">
      <h4 class="card-title">${this.name}</h4>
      <p class="card-text">Pokedex #: ${this.id}</p>
      <p class="card-text">${this.types}</p>
      <p class="card-text">Stats: ${this.stats}</p>
      <p class="card-text">Abilities: ${this.abilities}</p>
      ${this.Button}
    </div>
    `
    }

    get Button() {
        if (this._id) {
            return `<button onclick="app.myPokemonsController.removePokemon()" class="btn btn-danger">Remove Pokemon</button>`
        } else {
            return `<button onclick="app.myPokemonsController.addPokemon()" class="btn btn-success">Add Pokemon</button>`
        }
    }
}