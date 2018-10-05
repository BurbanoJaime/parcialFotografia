const express = require('express'),
    engines = require('consolidate');


var app = express();

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


app.listen(5000);

app.get('/', (req, res) => {
    res.render('/index.html');
});