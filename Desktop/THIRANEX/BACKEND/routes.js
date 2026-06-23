const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/", async(req,res)=>{

    try{

        const newMessage = new Contact({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        });

        await newMessage.save();

        res.status(201).json({
            success:true,
            message:"Message Saved"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });
    }
});

module.exports = router;