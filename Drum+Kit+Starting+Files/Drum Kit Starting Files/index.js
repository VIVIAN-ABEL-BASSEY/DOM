
// document.querySelector("button").addEventListener("click", feedback)

// function feedback(){
//     alert("I got clicked loveliest")
// }
let noOfDrumButtons = document.querySelectorAll("button.drum").length
for (let i=0; i<noOfDrumButtons;i++){
    document.querySelectorAll("button.drum")[i].addEventListener("click",function(){
        // alert("I got clicked loveliest")
        // 
    
    let buttonHtml = this.innerHTML
    switch(buttonHtml){
        case "w":
            let crash = new Audio("./sounds/crash.mp3")
            crash.play()
            this.style.color = "black"
            break
        case "a":
            kick_base = new Audio("./sounds/kick-bass.mp3")
            kick_base.play()
            this.style.color = "black"
            break
        case "s":
            snare = new Audio("./sounds/snare.mp3")
            snare.play()
            this.style.color = "black"
            break
        case "d":
            tom_1 = new Audio("./sounds/tom-1.mp3")
            tom_1.play()
            this.style.color = "black"
            break
        case "j":
            tom_2 = new Audio("./sounds/tom-2.mp3")
            tom_2.play()
            this.style.color = "black"
            break
        case "k":
            tom_3 = new Audio("./sounds/tom-3.mp3")
            tom_3.play()
            this.style.color = "black"
            break
        case "l":
            tom_4 = new Audio("./sounds/tom-4.mp3")
            tom_4.play()
            this.style.color = "black"
            break
        default:
            "not a drum"
    }
     })}
// below will work exactly the same way
// for (let i=0; i<noOfDrumButtons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",clickableButtons)
// }
// function clickableButtons(){
//     alert("I got clicked loveliest")
// }