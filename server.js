import express from 'express';

const app = express();


app.get('/', function(req, res) {
    console.log('Home!');
    
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
        <h1>Hello World! React + SSR +  Express + Babel + Webpack .</h1>
    </body>
    </html>
`;
    res.send(html);
});

app.listen(3030, function() {
    console.log('The server is listining in the port 3030.')
})