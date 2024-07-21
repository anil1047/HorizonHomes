import mongoose from 'mongoose';

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
        
    },
   email:{
        type:String,
        required:true,
        unique: true,
        
    },
    password:{
        type:String,
        required:true,   
    },
    avatar:{
        type:String,
         default: "https://www.freepik.com/free-psd/3d-illustration-person-with-sunglasses_27470334.htm#query=avatar&position=1&from_view=keyword&track=sph&uuid=3f60c4b0-8bda-48eb-a226-dd0a0c01343b"
    }
},{timestamps:true});

const User =mongoose.model('User',userSchema);

export default User;