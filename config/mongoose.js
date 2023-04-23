const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0/todo_list_db");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection was not successfull'));

db.once('open', function () {
    console.log("connection was successfull");
})