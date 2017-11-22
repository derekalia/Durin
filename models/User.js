const mongoose = require('mongoose');
const { Schema } = mongoose;
const courseSchema = require('./Course');


const userSchema = new Schema({    
    uuid:String,
    name:String,
    authToken:String,
    email:String,
    password:String,
    stripeId:String,
    plan:{type:String, default: ''},
    status: {type:String, default: 'new'},
    courses: [courseSchema],
    dateCreated: {type:Date, default:Date.now()}, 
});

mongoose.model('users', userSchema);