const mongoose = require('mongoose');

const database_url = process.env.DATABASE_URL;

const database = mongoose.connect(database_url).then(() => {
    console.log("databse connected successfully");
}).catch((error) => {
    console.log(error);
});

module.exports = database;