import ApiPokemonsController from "./Controllers/ApiPokemonsController.js";
import MyPokemonsController from "./Controllers/myPokemonsController.js";


class App {
  apiPokemonsController = new ApiPokemonsController();
  myPokemonsController = new MyPokemonsController();
}

window["app"] = new App();
