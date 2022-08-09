var createError = require('http-errors');
var express = require('express');
var path = require('path');
const port = process.env.PORT || 3000 ;
var cookieParser = require('cookie-parser');
require('dotenv').config()
var logger = require('morgan');
const bodyParser=require('body-parser');

var databaseConnection = require('./src/database/index.js');
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


var indexRouter = require('./src/services/user/routes/index.js');
var ticketRouter = require('./src/services/tickets/routes/index.js');

app.use('/user', indexRouter);
app.use('/tickets', ticketRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});