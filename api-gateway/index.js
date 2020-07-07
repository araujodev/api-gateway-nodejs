const express       = require('express');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const httpProxy     = require('express-http-proxy');

const app = express();
const helloService = httpProxy('http://localhost:3001');
const personService = httpProxy('http://localhost:3002');

app.get('/hello', (req, res, next) => helloService(req, res, next));
app.get('/people', (req, res, next) => personService(req, res, next));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(3000, () => {
    console.log("API-Gateway has been started at: http://localhost:3000");
})