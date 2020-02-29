import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/DragonRoot/DragonRoot';
import * as serviceWorker from './serviceWorker';

let dragon = {
    imagePath: process.env.PUBLIC_URL + 'testDrag.png',
    name: "Leafy Sea Dragon",
    mother: {
        imagePath: process.env.PUBLIC_URL + 'testDrag.png',
        name: "Leafy Mom",
        mother: {
            imagePath: process.env.PUBLIC_URL + 'testDrag.png',
            name: "Leafy Grandma"
        },
        father: {
            imagePath: process.env.PUBLIC_URL + 'testDrag.png',
            name: "Leafy Grandad"
        }
    },
    father: {
        imagePath: process.env.PUBLIC_URL + 'testDrag.png',
        name: "Leafy Dad"
    }
}

ReactDOM.render(<Root data={dragon} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
