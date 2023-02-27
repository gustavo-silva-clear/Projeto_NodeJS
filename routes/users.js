let NeDb = require('nedb');
let db = new NeDb({
    filename: 'users.db',
    autoload: true
});


module.exports = app => {

    let route = app.route('/users');

//Pega os dados do banco
    route.get((req, res) => {

        db.find({}).sort({ name: 1 }).exec((err, users) => {

            if (err) {
                app.utils.error.send(err, req, res);
            }
            else {

                res.statusCode = 200;
                res.setHeader("Content-type", "application/json");
                res.json({
                    users

                });
            }


        });

    });

//Recebe os dados do banco
    route.post((req, res) => {

        db.insert(req.body, (err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);
            }
            else {

                res.status(200).json(user);

            }
        });
    });

//Pego um usuario especifico
    let routeId = app.route('/users/:id');

    routeId.get((req, res) => {

        db.findOne({ _id: req.params.id }).exec((err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);
            }
            else {

                res.status(200).json(user);

            }

        });

    });

    //modifico as informações de um usuario
    routeId.put((req, res) => {

        db.update({ _id: req.params.id } , req.body , err => {

            if (err) {
                app.utils.error.send(err, req, res);
            }
            else {

                res.status(200).json(Object.assign(req.params , req.body));

            }

        });

    });


};
