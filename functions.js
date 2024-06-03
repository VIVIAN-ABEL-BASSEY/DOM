// function greet(){
// // This is a function without parameter, so when you call or invoke you dont need to put a value inside the bracket
//     console.log("ekaro")
// }

// greet()

// function greetName(name,age){
//     // This is a function without parameter, so when you call or invoke you need to put a value inside the bracket
//     console.log("hello "+ name + " you are " + age)
// }
// greetName("tj",49)//default function call
// greetName(age=18,name ="tj")//keyword function call

function sub(a=2,b=1){
    return a - b
}


console.log(sub(6))