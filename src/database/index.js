// Set up mongoose connection
const mongoose = require('mongoose');
let database_url = 'mongodb://localhost:27017/skrate';

// Connecting to the database
mongoose.connect(database_url, {
    keepAlive: true,
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

module.exports = mongoose.connection;