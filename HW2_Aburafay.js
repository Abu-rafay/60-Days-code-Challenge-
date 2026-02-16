/**
 * Fnu Aburafay
 * Homework 2- functions, loops and conditional statment
 */
console.log("\n----Exercise 1-----")
let names =["Ann","Peter","Patricia","Sam","Katerina"]
function nameCounting(arr) {
    count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 5) {
            count++
        }
        
    }
    return count

}

console.log(nameCounting(names))

console.log("\n----Exercise 2-----")

function checkNum() {
    let num = prompt("Enter a number")
    while (num === null || num === "" || isNaN(num)) {
        if(num === null || num === ""){
            num = prompt("You did not enter a number")
        }
        else if(isNaN(num)){
            num = prompt("Enter a valid number")
        }
    }
    num = Number(num)
    if(num % 2 === 0){
        return true
    }
    else{
        return false
    
    }

}
console.log(checkNum())