// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function carModels(inventory){
    let carModels = [];
    inventory.map(car =>{
        carModels.push(car.car_model);
    });
    if(carModels.length === 0) {
        return "Inventory is empty";
    }
    return carModels.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

module.exports = carModels;