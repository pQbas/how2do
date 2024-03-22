const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
];
  
const groupedItems = items.reduce((accumulator, item) => {
    const category = item.category;
    if (!accumulator[category]) {
        accumulator[category] = []
    }
    accumulator[category].push(item.name);
    return accumulator
}, {})

console.log(groupedItems);
// { Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }