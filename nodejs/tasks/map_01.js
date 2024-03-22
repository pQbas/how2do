// TASK: How obtain output from input using map method?
let input = [
    { id: 710, bk: '236000997' },
    { id: 714, bk: '236000997' },
    { id: 711, bk: '236001130' }
]

// Answer:
let output = input.map(element => ({"label": element.bk, "id": element.id}))

console.log(output)

// expected output:
// [
//   { label: '236000997', id: 710 },
//   { label: '236000997', id: 714 },
//   { label: '236001130', id: 711 }
// ]