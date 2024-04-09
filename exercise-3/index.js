let num = 3;

function factorialReduce(number){
    let arr = Array.from(Array(number+1).keys())
    let array = arr.slice(1,).reduce((a, b) => a*b)
    return array
}

console.log(factorialReduce(num))

function forFac(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}

console.log(forFac(num))