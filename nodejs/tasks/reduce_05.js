const numbers = [1, 2, 3, 4, 5];

const isEven = (x) => x % 2 === 0;

let result = numbers.reduce((acc, item) => {
    if (isEven(item)){
        acc.push(item)
    }
    return acc
}, [])

console.log(result)


console.log()