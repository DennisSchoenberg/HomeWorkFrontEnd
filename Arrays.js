let names = ["Семён", "Иван", "Пётр", "Татьяна"];
// console.log(names);
let ages =[19,28,75,35];
// console.log(ages);
let comboArray =[];
for (let i = 0; i < names.length ; i++) {
    let Element = names[i] + " " + ages[i] + " лет";
    comboArray.push(Element)

}
console.log(comboArray);

let reverseArray = [];
for (let i = comboArray.length - 1; i >= 0; i--  ) {
    reverseArray.push(comboArray[i])
}
console.log(reverseArray);