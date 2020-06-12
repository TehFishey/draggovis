import React from 'react';
import {SettingsProvider} from './Settings';
import Stage from './components/Stage';
import './app.css';

function App() {
    return (
        <div className="app-root">
            <div className="app-header"></div>
            <SettingsProvider>
                <Stage />
            </SettingsProvider>
            <div className="app-footer"></div>
        </div>
    );
}

export default App;