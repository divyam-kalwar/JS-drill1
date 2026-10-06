import inventory from "../dataset/inventory.js"
import carData from "../project/problem1.js";

const carInfo = carData(inventory);
console.log(`Car ${carInfo.id} is a ${carInfo.car_year} ${carInfo.car_make} ${carInfo.car_model}`);