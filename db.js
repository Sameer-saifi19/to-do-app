const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId

const todoSchema = new Schema ({
    title: {type: String, required: true},
    description:  {type: String, required: true},
    date: { type: Date, required: true},
    done: { type: Boolean, required: true, default: false}
})

const todoModel = mongoose.model('todos', todoSchema )

module.exports = todoModel;