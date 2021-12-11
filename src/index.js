import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const comments = JSON.parse(localStorage.getItem('comments'));

ReactDOM.hydrate(
    <App comments={comments} />,
    document.querySelector('#app')
);