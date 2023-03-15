const mongoose = require("mongoose");

const Userschema=new mongoose.Schema({
    Name: {type:String,required:true},
    Email: {type:String,required:true,unique:true},
    pass: {type:String,required:true},
},{timestamps:true});

export default mongoose.models.data||mongoose.model( "data",Userschema);