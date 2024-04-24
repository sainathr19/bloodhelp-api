const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    Fullname:String,
    Bloodgroup:String,
    Email:String,
    Mobilenumber:String,
    State:String,
    District:String,
    City:String,
    Availability:String,
    Last6months_Donations:Boolean

});
module.exports=mongoose.model('User',userSchema);