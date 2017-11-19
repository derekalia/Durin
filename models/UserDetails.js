const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDetailsSchema = new Schema({    
    id:String,
    name:String,
    stripeId:String,
    authToken:String,
    email:String,
    password:String,
    courses:[String],
    plan:String,    
    status:{type:String, default: 'new'},
    dateCreated: Date
});


module.exports = userDetailsSchema;

// mongoose.model('userDetails', userDetailsSchema);