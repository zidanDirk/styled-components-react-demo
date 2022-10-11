import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// render(<App />, document.body)

const root = createRoot(document.querySelector('#app'))
root.render(<App />)