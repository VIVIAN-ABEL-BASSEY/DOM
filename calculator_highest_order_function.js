function addition(num1,num2){
    return num1 + num2
}
function subtraction(num1,num2){
    return num1 - num2
}
function multiplication(num1,num2){
    return num1 * num2
}
function division(num1,num2){
    return num1 / num2
}
function modulus(num1,num2){
    return num1 % num2
}
function exponential(num1,num2){
    return num1 ** num2
}

function calculator(num1,num2,operator){
    return operator(num1,num2)
}

console.log(calculator(3,4,addition))
console.log(calculator(3,4,multiplication))
console.log(calculator(3,4,division))
console.log(calculator(3,4,modulus))

// let noOfcalButtons = document.querySelectorAll("div.butt").length
// for (i=0;i<noOfcalButtons;i++){
//     document.querySelectorAll("div.butt")[i].addEventListener("click",function(n1,n2,operator){
//         alert("got cliked")
//         operator = this.innerHTML
//         switch(operator){
//             case "1":
//                 let one = this.querySelector("input#calc placeholder")
//                 one.innerHTML = "1"
//                 break
//             case "+":
//                 let result = n1 + n2
//                 // return result
//                 alert(`result is ${result}`)
//                 console.log(result)
//                 break
//         }

//     })
// }