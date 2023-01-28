import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';

const rootDOM = document.querySelector('#app');
const rootReact = rootDOM && ReactDOM.createRoot(rootDOM);

rootReact && rootReact?.render(
    <StrictMode>
        <App />
    </StrictMode>
);