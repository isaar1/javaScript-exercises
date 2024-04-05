let random = Math.random()
console.log(random)

let a = prompt("Enter your first number: ")
let b = prompt("Enter operation: ")
let c = prompt("Enter your second number: ")


obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    // performs correct calculations
    console.log(`The result is ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else {
    // preforms wrong calculations
    b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}