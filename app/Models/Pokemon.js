export default class Pokemon {
    constructor({ _id, id, name, weight, height, img }) {
        this.id = id
        this._id = _id
        this.name = name
        this.weight = weight
        this.height = height
        this.img = img || "//placehold.it/100x100"
    }

    get Template() {
        return `
    <div class="card-body">
      <h4 class="card-title">${this.name}</h4>
      <p class="card-text">Height: ${this.height}</p>
      <p class="card-text">Weight: ${this.weight}</p>
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