const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  name: { type: String },
  surname: { type: String },
  age: { type: Number },
  email: { type: String },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other', 'I\'d rather not say'],
  },
});
module.exports = mongoose.model('User', user);
