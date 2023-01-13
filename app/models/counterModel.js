const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counterSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Counter = mongoose.model('Counter', counterSchema);
module.exports = Counter;