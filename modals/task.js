const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    desc: {
        type: String
    },
    category: {
        type: String
    },
    date: {
        type: String
    },
    isDone: {
        type: Boolean
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;