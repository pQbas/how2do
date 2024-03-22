// Remove Duplicates Using the reduce() Method
const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const noDuplicateItems = items.reduce((accumulator, item) => {
    if (!accumulator.includes(item)) {
      accumulator.push(item);
    }
    return accumulator;
  }, []);

console.log(noDuplicateItems); 
// [ 1, 2, 3, 7, 8 ]