const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nick: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: Array,
    required: true,
    default: ["User"],
  }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt)

  next();
})

userSchema.pre('updateOne', async function (next) {

  const salt = await bcrypt.genSalt();
  this._update.$set.password = await bcrypt.hash(this._update.$set.password, salt)

  next();
})

const User = mongoose.model('User', userSchema);
module.exports = User;