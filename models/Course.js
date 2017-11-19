const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  id: String,
  title: String,
  description: String,
  source: String,
  creator: String,
  votes: String,
  length: Number,
  image: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('course', courseSchema);
