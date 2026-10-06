// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const carYears = require("./problem4");


function oldCars(inventory){
    let oldCarsYears = [];
    let carYears = [];

    for(const car of inventory){
        carYears.push(car.car_year);
    }

    for(let year of carYears){
        if(year<2000){
            oldCarsYears.push(year);
        }
    }
    return oldCarsYears;
}

module.exports = oldCars;