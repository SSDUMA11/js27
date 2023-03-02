let car = {
    type: 'electric',
    wheeles: 4,
}

let sportCar = {
    doors: 2,
}

Object.setPrototypeOf(sportCar, car);
console.log(sportCar);

let passengerCar = Object.create(car, {
    doors: {
      value: 4
    }
  });

console.log(passengerCar);

let toyCar = Object.create(car && sportCar, {
    type: {
      value: 'toy'
    }
  });
console.log(toyCar);