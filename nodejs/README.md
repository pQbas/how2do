## NODEJS

Resources:
-  Aprende Node.js y Express - Curso desde Cero : `https://www.youtube.com/watch?v=1hpc70_OoAg`

### > verify the node-js version?
```bash
node --version
```

### > run js files in terminal?
```bash
$ node
Welcome to Node.js v18.17.1.
Type ".help" for more information.
> .editor
> function saludar(nombre){ return `Hola`;}
undefined
> saludar("awd")
'Hola'
> .exit
```

### > declare a function?

```js
function saludar(variable){
    return `Hola, ${variable}`
}
console.log(saludar("Percy"));
```

### > import and export functions?

`main.js`
```js
const utils = require("./utils.js")

console.log(utils.saludar("percy"))
console.log(utils.saludarHolaMundo())
```

`utils.js`
```js
function saludar(variable){
    return `Hola, ${variable}`
}
function saludarHolaMundo(){
    return `Hola Mundo`
}

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}
```

### > import with desustructuration?
```js
const { saludar, saludarHolaMundo } = require("./utils.js")

console.log(saludar("percy"))
console.log(saludarHolaMundo())
```

### > Import variables from another file
In Node.js, you can access variables from another file by using the module.exports or exports object. Let’s say you have two JavaScript files: file1.js and file2.js. In file1.js, you have a variable that you want to access in file2.js.In this example, myVariable from file1.js is exported using module.exports, and then it is imported in file2.js using require(). The ./ in require('./file1.js') specifies that file1.js is in the same directory as file2.js.

```js
// file1.js
let myVariable = "Hello, World!";
module.exports = myVariable;
```

```js
// file2.js
let myVariable = require('./file1.js');
console.log(myVariable);  // Outputs: Hello, World!
```
### > Using map to work with arrays?

```js
// TASK: How obtain output from input using map method?
let input = [
    { id: 710, bk: '236000997' },
    { id: 714, bk: '236000997' },
    { id: 711, bk: '236001130' }
]
let output = [
  { label: '236000997', id: 710 },
  { label: '236000997', id: 714 },
  { label: '236001130', id: 711 }
]

// Answer:
let output = input.map(element => ({"label": element.bk, "id": element.id}))
```

### > Using reduce to work with arrays?



```js
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

let output = [
  { label: '236000997', id: 710 },
  { label: '236000997', id: 714 },
  { label: '236001130', id: 711 },
  { label: '236001130', id: 715 },
  { label: '236082958', id: 723 },
  { label: '236082958', id: 724 },
  { label: '2360829123', id: 724 },
  { label: '236082333958', id: 729 }
]

// Answer:
let result = threeSamplesFromExtraCostos.reduce( (acc, sample) => (
    [...acc, ...sample.bk.map(element => ({'label': element.bk, 'id': sample.idOrenT}))]
),[])

```