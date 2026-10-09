// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.


function BMWAndAudi(inventory){
    if (inventory.length === 0) {
        return "Inventory is empty";
    }
    const result =  inventory.filter(car => 
        ["BMW", "Audi"].includes(car.car_make)
    );

    if (result.length === 0) {
        return "No BMW or Audi cars found in the inventory";
    }

    return JSON.stringify(result);
}

module.exports = BMWAndAudi;