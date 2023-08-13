const express = require('express');

const User = require('../models/User'); // Import your UserSchema model
const Chat = require('../models/Chat');
const Text = require('../models/Text');

const router = express.Router();

router.post("/",async(req,res)=>{
    console.log("chat api called")
        const text = new Text({
            senderid:req.body.senderid,
            sendername:req.body.sendername,
            message:req.body.message,
            
        })
       
        const endtoendchat1=new Chat({ 
            receiverid:req.body.receiverid,
            text:text
    
    
        })
        const endtoendchat2=new Chat({ 
            receiverid:req.body.senderid,
            text:text
    
    
        })
    
    
        //console.log("debug",req.body.senderid,req.body.receiverid)
        const senderuser = await User.findById(req.body.senderid);
       
        const receiveruser = await User.findById(req.body.receiverid);
        
        const chatsenderExists = await senderuser.chats.find((chatId) => chatId.receiverid === req.body.receiverid);
        const chatreceiverExists = await receiveruser.chats.find((chatId) => chatId.receiverid === req.body.senderid);
      
        try{
        if (chatsenderExists!=null&&chatreceiverExists!=null) {
          console.log("checked")
          senderuser.chats.map((chatId) => {if(chatId.receiverid === req.body.receiverid) {chatId.text.push(text)}},{new:true});
          receiveruser.chats.map((chatId) => {if(chatId.receiverid === req.body.senderid) chatId.text.push(text)},{new :true});
           
           res.status(200).json(senderuser)
           senderuser.markModified('chats');
           receiveruser.markModified('chats');
           await senderuser.save();
           await receiveruser.save()
    
          
        }else {
            console.log("chat not exists")
            senderuser.chats.push(endtoendchat1);
            receiveruser.chats.push(endtoendchat2);
            await senderuser.save();
            await receiveruser.save()
            // console.log(senderuser)
            // res.status(200).json(receiveruser.chats);
            res.status(200).json("ok")
        }

    

         
        
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
       
    
    
    
    
    
    }
    
    )

module.exports = router;
