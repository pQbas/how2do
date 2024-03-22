// Remove Duplicates Using the reduce() Method
const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

let result = items.reduce((acc, item) => {
    if(!acc.includes(item)){
        acc.push(item)
    }
    return acc
}, [])

console.log(result);
// [ 1, 2, 3, 7, 8 ]