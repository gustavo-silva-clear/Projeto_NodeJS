
module.exports = (app)=>{


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
    
    app.post('/users',(req, res) => {
    
        res.json(req.body);
    });

};
