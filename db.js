const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false },
}, {
  timestamps: true
});

const todoModel = mongoose.model('todos', todoSchema);

module.exports = todoModel;
