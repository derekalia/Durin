const mongoose = require('mongoose');
// const Schema = mongoose.Schema
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId:String,
    name:String,
    stripeId:String,
    plan:String
});

mongoose.model('users', userSchema);