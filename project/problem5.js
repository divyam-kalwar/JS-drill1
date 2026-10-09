// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const carYears = require("./problem4");


function oldCars(inventory){
    const carYears = inventory.map(car => car.car_year);

    return carYears.filter(year => year < 2000);
}

module.exports = oldCars;