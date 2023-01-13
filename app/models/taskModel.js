const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  important: {
    type: Boolean,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;