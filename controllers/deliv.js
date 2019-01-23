const express= require('express');
const router = express.Router();


const User = require('../models/secuser');
const InvoiceItems =require('../models/invoicedb');
const Deliverer=require('../models/deliverers');
//get a list from db
var bcrypt = require('bcrypt');


//register delivere
module.exports.registerDeliverer=(req,res,next)=>{ 

     Deliverer.find({email:req.body.email }).then(function(details){
     if(details.length>0){
         return res.status(400).json({
             message:"email exist"
         });
         
     }
 
     else{
        bcrypt.hash(req.body.pass,10,(err,hash)=>{
            if(err){
                return res.status(300).json({
                    error:err
                });
            }
            else{  
            

                 var det = new Deliverer({
                    
                     email:req.body.email,
                     password:hash,
                     username:req.body.name,
                     address:req.body.address,
                     mobile:req.body.mobile,
                     shopid:req.body.shopid
                    
                       });
                 det.save((err,doc)=>{
                     if(!err){
                         res.status(200).send(doc);
                         console.log("signed")
                         console.log(doc);
                     }
                     else{
                         console.log('Error in sending Employees :'+ JSON.stringify(err,undefined,2));
                         return res.status(500).json({
                             error:err
                         });
                     }
                     });
                 }
                });
            }  
                
            
     
     });
  
    
    }
 
//show delivereres
module.exports.showDeliverers=(req,res,next)=>{    
    Deliverer.find({shopid:req.params.id},req.body).then(function(details){
            res.send(details);
            console.log(details);
        
    }).catch(next);
    
}

//edit deliveres
module.exports.editDel=(req,res,next)=>{ 
    Deliverer.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Deliverer.findOne({_id:req.params.id}).then(function(details){
            res.send(details);
            console.log(details);
        });
        
    }).catch(next);
}



//view one delivered
module.exports.viewDel=(req,res,next)=>{ 
    Deliverer.findById({_id:req.params.id},req.body).then(function(details){
            res.send(details);
            console.log(details);
        
    }).catch(next);
}

module.exports.retrieveDeliverer=(req,res,next)=>{
    Deliverer.find({}, (err, items) => {
        console.log(items);
      if (err) return res.json({ success: false, error: err });
      return res.json(items);
    });
}

module.exports.assignDeliverer=(req,res,next)=>{
    console.log(req.body)
    InvoiceItems.findOneAndUpdate({invoiceID:req.params.id},req.body).then(function(){
        InvoiceItems.findOne({invoiceID:req.params.id}).then(function(details){
            res.send(details);
        });
        
    }); 
}
