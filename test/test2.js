import inventory from "../dataset/inventory.js";
import lastCar from "../project/problem2.js";

const lastCarInfo = lastCar(inventory);
console.log(`Last car is a ${lastCarInfo.car_make} ${lastCarInfo.car_model}`);