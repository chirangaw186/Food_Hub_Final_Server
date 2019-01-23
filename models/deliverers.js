const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Details = new schema({

    driverID:{
        type:String
      
    },
    driverName:{
        type:String
      
    },
    email:{
        type:String,
        unique:true,
        required:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },

    password:{
        type:String,
        required:true,
        match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,  //nikan dala thyenne hash wena nisa krn ba
        minlength:5
    
       
    },
    
    address:{
        type:String,
        required:true
    },
    
    mobile:{
        type:String,
        match: /^\d{10}$/,
        required:true,
        minlength:10,
        maxlength:10
        
    },
    shopid:{
        type:String,
        required:true
    },
 



    
     
});

const Detailsitem = mongoose.model('deliverer',Details);//'details' is mongodb name Details is the schema name;register is collection name;
module.exports=Detailsitem;