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


