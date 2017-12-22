const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({  
  title: String,
  description: String,
  source: String,
  author: String,
  votes: String,
  length: Number,
  image: String,
  linkTitle:String,
  free:Boolean,
  content:String,
  category:String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: {type:Date, default:Date.now()}, 
  dateUpdated: {type:Date, default:Date.now()}, 
});

mongoose.model('courses', courseSchema);
