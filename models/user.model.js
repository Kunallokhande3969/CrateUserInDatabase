
 const mongoose = require('mongoose');
 const UserShema =  mongoose.Schema({
    name : String,
    email: String,
    image : String,  
 })
  module.exports = mongoose.model('User', UserShema);
