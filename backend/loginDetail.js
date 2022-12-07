const mongoose = require("mongoose");


const LoginSchema = new mongoose.Schema(
    {
        nomeCompletoUser:{type:String, trim:true, required: true},
        username:{type:String, trim:true, required: true, unique:true},
        password:{type:String, trim:true, required: true}
   
    },
    {
        collection:"LoginUser",
    }
);

mongoose.model("LoginUser", LoginSchema);