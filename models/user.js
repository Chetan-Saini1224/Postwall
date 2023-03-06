import mongoose from "mongoose";
import multer from "multer";
import path from "path";
const AVATAR_PATH = path.join("/uploads/users/avatars/");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    }   
},{
    timestamps:true
})


const User = mongoose.model("User",userSchema);
export default User;