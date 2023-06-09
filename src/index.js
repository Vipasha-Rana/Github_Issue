import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './Components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

