const plant = {
    growt: "normal",
    age: 12,
    growth(){ 
        console.log("Рост на 10см");
    }
}
const rose = {
    __proto__ : plant,
    numberOfBuds: 7
}
rose.growth();