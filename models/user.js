const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Username:String,
    password:String
});
const Usermodel = mongoose.model('User', userSchema);
module.exports = Usermodel;