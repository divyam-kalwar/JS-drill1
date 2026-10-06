// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function carModels(inventory){
    let carModels = [];
    for(const car of inventory){
        carModels.push(car.car_model);
    }
    return carModels.sort();
}

module.exports = carModels;