const mongoose = require('mongoose');
const { Schema } = mongoose;
const courseSchema = require('./Course');

const userSchema = new Schema({
  uuid: String,
  name: String,
  authToken: String,
  email: String,
  password: String,
  stripeId: String,
  plan: { type: String, default: 'free' },
  status: { type: String, default: 'new' },
  courses: [courseSchema],
  preview: String,
  dateCreated: { type: Date, default: Date.now() },
  subscriptionId: String,
  role: String
});

mongoose.model('users', userSchema);
