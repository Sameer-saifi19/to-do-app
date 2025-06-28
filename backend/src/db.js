const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId

const todo = new Schema ({
    title: {type: String, required: true},
    description:  {type: String, required: true},
    date: { type: Date, required: true},
    done: { type: Boolean, required: true, default: false}
})

const todoSchema = mongoose.model('todos', todo )

module.exports = todoSchema;