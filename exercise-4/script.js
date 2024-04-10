        //  method 1

// let container = document.body.childNodes[3].childNodes;

// console.log(container)

// console.log(container[1].style.backgroundColor = "pink")
// console.log(container[1].style.color = "white")

// console.log(container[3].style.backgroundColor = "red")
// console.log(container[3].style.color = "blue")

// console.log(container[5].style.backgroundColor = "grey")
// console.log(container[5].style.color = "black")

// console.log(container[7].style.backgroundColor = "blue")
// console.log(container[7].style.color = "yellow")

// console.log(container[9].style.backgroundColor = "yellow")
// console.log(container[9].style.color = "orange")


        // method 2  -- correct method

let boxes = document.querySelector(".container").children

function getRandomClor(){
    value1 = Math.ceil(0 + Math.random() *255);
    value2 = Math.ceil(0 + Math.random() *255);
    value3 = Math.ceil(0 + Math.random() *255);

    return `rgb(${value1}, ${value2}, ${value3})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomClor();
    e.style.color = getRandomClor();
})