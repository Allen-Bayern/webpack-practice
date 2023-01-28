import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';

const rootDOM = document.querySelector('#app');
const rootReact = rootDOM && ReactDOM.createRoot(rootDOM);

rootReact && rootReact?.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);