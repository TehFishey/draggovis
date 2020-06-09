import React from 'react';
import Stage from './components/Stage';
import './app.css';

function App() {
    return (
        <div className="app-root">
            <div className="app-header"></div>
            <Stage />
            <div className="app-footer"></div>
        </div>
    );
}

export default App;