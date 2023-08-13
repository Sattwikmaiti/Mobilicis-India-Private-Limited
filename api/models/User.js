
const mongoose = require('mongoose')
const Schema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique:true
        
      },
      email: {
        type: String,
        required: true,
        unique:true
      },
     phonenumber:
     {
            type:Number,
            required:true
     },
      description:
      {
            type:String,
      }
      ,
      location:{
        type:String,
      },
      image:{
        type:String,
      },
      
      categories:{
        type:Array,
        default:[]
      },
      followers:{
        type:Array,
        default:[],
        unique:true
      },
      following:{
        type:Array,
        default:[],
        unique:true
      },
      password:{
        type:String

      },
      chats:{type:Array,default:[]},
    
    },
    {
        timestamps: true,
     }
  );
  
  const UserSchema = mongoose.model("UserSchema", Schema);
  module.exports = UserSchema;
