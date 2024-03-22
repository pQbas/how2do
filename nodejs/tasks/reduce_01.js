// TASK: How obtain output from input using reduce and map method?
let input = 
[
    {
        idOrdenT: 0,
        bk: [
            { id: 710, bk: '236000997' },
            { id: 714, bk: '236000997' },
            { id: 711, bk: '236001130' }
        ]
    },
    {
        idOrdenT: 395,
        bk: [{ id: 724, bk: '2360829123' }]
    },
    {
        idOrdenT: 100,
        bk: [ { id: 729, bk:'236082333958' }]
    }
]

// Answer:
let result = threeSamplesFromExtraCostos.reduce( (acc, sample) => (
    [...acc, ...sample.bk.map(element => ({'label': element.bk, 'id': sample.idOrenT}))]
),[])

console.log(result)

// expected output
// [
//     { label: '236000997', id: 710 },
//     { label: '236000997', id: 714 },
//     { label: '236001130', id: 711 },
//     { label: '236001130', id: 715 },
//     { label: '236082958', id: 723 },
//     { label: '236082958', id: 724 },
//     { label: '2360829123', id: 724 },
//     { label: '236082333958', id: 729 }
// ]