// Задание 1
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

// Создание нового массива объектов, содержащего только бренд и флаг isDiesel
const newCars = cars.map(car => {
    return { brand: car.brand, isDiesel: car.isDiesel };
});

console.log(newCars);

// Задание 2
const dieselCars = cars.filter(car => car.isDiesel);

console.log(dieselCars);

// Задание 3
const nonDieselCars = cars.filter(car => !car.isDiesel);

console.log(nonDieselCars);

// Задание 4

// Подсчет общей стоимости всех машин без дизельного двигателя
const totalNonDieselCarsPrice = nonDieselCars.reduce((total, car) => total + car.price, 0);

console.log(totalNonDieselCarsPrice); // Вывод: 47000

// Задание 5
// Повышение цены всех машин на 20%
const carsWithIncreasedPrice = cars.map(car => {
    return {
        ...car,
        price: car.price * 1.2 // Увеличение цены на 20%
    };
});

console.log(carsWithIncreasedPrice);

// Задание 6
// Создание нового массива, где все дизельные машины заменены на машины Tesla
const updatedCars = cars.map(car => {
    if (car.isDiesel) {
        return { brand: "Tesla", price: 25000, isDiesel: false };
    }
    return car;
});

console.log(updatedCars);

