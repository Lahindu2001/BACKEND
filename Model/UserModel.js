const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String , // dataType
        required:true, //validate
    },
    gmail:{
        type:String , // dataType
        required:true, //validate
    },
    age:{
        type:Number , // dataType
        required:true, //validate
    },
    adress:{
        type:String , // dataType
        required:true, //validate
    }
   

});

module.exports = mongoose.model(
    "UserModel", //filename
    userSchema //functionName

)