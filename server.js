import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import axios from 'axios';

import { App } from './src/App';

const app = express();

app.get('/', function(req, res) {
    axios.get('http://localhost:3030/comments').then(function(resp) {
        console.log(resp.data)
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>React SSR</title>
            </head>
            <body>
                <div id="app">
                ${ReactDOM.renderToString(<App comments={resp.data?.slice(0, 2)} />)}
                </div>
                <h1>Hello World! React + SSR +  Express + Babel + Webpack .</h1>
            </body>
            </html>
        `;
            res.send(html);
    })    
});

app.get('/comments', function(req, res) {
    res.send([
        {id: 1, author: 'Henrique 1', text: 'Text'},
        {id: 2, author: 'Henrique 2', text: 'Text'},
        {id: 3, author: 'Henrique 3', text: 'Text'},
        {id: 4, author: 'Henrique 4', text: 'Text'},
        {id: 5, author: 'Henrique 5', text: 'Text'},
        {id: 6, author: 'Henrique 6', text: 'Text'},
    ])
})

app.listen(3030, function() {
    console.log('The server is listining in the port 3030.')
})