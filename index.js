const express = require('express');

let app = express();

app.get('/',(req, res) => {

    console.log("URL:", req.url);
    console.log("METHOD", req.method);

            res.statusCode = 200;
            res.setHeader("Content-type", "text/html")
            res.end('<h1>Hi</h1>');

});

app.get('/users',(req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json({

    users:[{

        name:'dev.dev',
        email:'dev.dev@gmail.com',
        id: 1

    }]
        
    });

});


app.listen(3000, '127.0.0.1', () => {

    console.log("server running!");

});