const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //TODO TO BE CHANGED, NOW ACCEPTS REQUESTS FROM ALL DOMAINS
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

require('./app/routes')(app);

// Launch server
app.listen(port);

console.log("App listening on port " + port);