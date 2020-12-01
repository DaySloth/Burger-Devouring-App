const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const compression = require('compression');

const app = express();

const PORT = process.env.PORT || 80;

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const controller = require('./app/controllers/burgerController.js');

app.use(controller);

app.listen(PORT, function(){
    console.log('Server listening on: http://localhost:80');
});