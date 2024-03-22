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

Resource: `https://www.freecodecamp.org/espanol/news/javascript-map-como-utilizar-la-funcion-js-map-metodo-de-arreglo/`


```js
let arr = [3, 4, 5, 6];

let result = arr.map(element => (
    element*3
))

console.log(result)
```

### > Using reduce to work with arrays?

Resource: `https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/`

```js
const items = [
  { name: 'Apple', price: 1 },
  { name: 'Orange', price: 2 },
  { name: 'Mango', price: 3 },
];

const totalPrice = items.reduce((accumulator ,item) => {
  return accumulator += item.price;
}, 0)

console.log(accumulador)
```