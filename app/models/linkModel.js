const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  nick: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  }
});

const Link = mongoose.model('Link', linkSchema);
module.exports = Link;