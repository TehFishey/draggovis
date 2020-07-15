import React from 'react';
import {SettingsProvider} from './context/Settings';
import Stage from './stage/Stage';
import './app.css';

function App() {
    return (
        <div className="app-root">
            <div className="app-header">Draggovis - (Beta 0.1)</div>
            <SettingsProvider>
                <Stage />
            </SettingsProvider>
        </div>
    );
}

export default App;