var express = require('express');
var app = require('express')();
var bodyParser = require('body-parser');

//var route = require('./views/pages/index');
app.use(session({
    secret: 'toto',
    resave: false,
    saveUnitialized: true,
    cookie: { secure: false }
}))

app.use(require('/middlewares/flash'));
// Moteur de template 
app.set('view engine', 'ejs');

// Middleware 
app.use('/assets', express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    console.log(request.session.error)
    response.render('pages/index', { test: 'Salut' });

});
app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        // request.session.error = "Il y a une erreur ! bruh"
        request.flash('error', "Vous n'avez pas posté de message")
        response.redirect('/')
            //response.render('pages/index', { error: "Vous n'avez pas entré de message :( " });
    }
});


app.listen(8080);