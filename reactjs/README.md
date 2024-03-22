# REACTJS

Resources:
-  React Tutorial for Beginners: `https://www.youtube.com/watch?v=SqcY0GlETPk`
-  

## 1. Basics

### > create a react-js project?
```bash
npm create vite@4.1.0
cd react-app
npm i
npm run dev
```

### > create a basic Hello World? 
#### (create a component)

1. In `react-app/src/app.jsx` write:

```js
import Message from "./Message"

function App(){
  return <div><Message/></div>
}

export default App
```

2. Create a jsx-file `Message.jsx` in `react-app/src`:

```js
function Message(){
    return <h1> Hello World </h1>
}

export default Message
```
3. Run `npm run dev` in `react-app/` folder.


### > create a list? 
1. Bootstrap is needed to this, install it using `npm i bootstrap@5.2.3`. Remove the content in `App.css` and `index.css`. Add following in `main.jsx`:

```js
import 'bootstrap/dist/css/bootstrap.css'
```

2. Create a folder `react-app/src/components` with `ListGroup.jsx` with following:

```js
function ListGroup(){
    return(
        <div>
            <h1>List Group</h1>
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
    )
}

export default ListGroup
```

3. In `App.jsx`:

```js
import ListGroup from "./components/ListGroup"

function App(){
  return <div><ListGroup/></div>
}

export default App
```

