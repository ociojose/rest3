//configuración
require('./config/config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/d', function(req, res) {
    res.json('Get usuario')
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    res.json({
        persona: body
    });
})
app.put('/usuario', function(req, res) {


    res.json('Put usuario')
})

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    let usuario = {
        id
    }

    res.json(usuario);
})

// app.put('/', function(req, res) {
//     res.json('Put usuario')
// })

app.delete('/', function(req, res) {
        res.json('Delete usuario')
    })
    // app.get('/', function(req, res) {
    //     res.json('')
    // })



app.listen(process.env.PORT,
    () => {
        console.log("Escuchando en puertro: " + process.env.PORT);
    }
);