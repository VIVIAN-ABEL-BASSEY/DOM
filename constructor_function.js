function SalePerson(name,age,experience,languages){
    this.name = name;
    this.age = age;
    this.experience=experience;
    this.languages=languages
}

let cleaner = new SalePerson("bassey",12,40,["french","english"])
console.log(cleaner)
let chef = new SalePerson("Abas",19,3,["spanish","ashia"])
console.log(chef)
// console.log(dryCleaner.name)

// method in js
// this are functions associated with an object

// function Meals(food,drink){
//     this.food = food;
//     this.drink = drink;
//     this.message = function(){
//         console.log(`what do you want we have ${food, drink} only`)
//     }
// }

// let service = new Meals("eba","yogurt")
// console.log(service.message())