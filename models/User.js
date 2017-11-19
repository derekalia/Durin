const mongoose = require('mongoose');
const { Schema } = mongoose;
const courseSchema = require('./Course');


const userSchema = new Schema({    
    uuid:String,
    name:String,
    authToken:String,
    email:String,
    password:String,
    courses:String,
    stripeId:String,
    plan:String,
    status: {type:String, default: 'new'},
    courses: [courseSchema],
    dateCreated: Date, 
});

mongoose.model('users', userSchema);