module.exports = app =>{

    app.get('/',(req, res) => {

        console.log("URL:", req.url);
        console.log("METHOD", req.method);
    
                res.statusCode = 200;
                res.setHeader("Content-type", "text/html")
                res.end('<h1>Hi</h1>');
    
    });

};