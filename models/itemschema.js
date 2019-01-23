const mongoose = require('mongoose');
const schema = mongoose.Schema;



const Item = new schema({
   
    itemid:{
        type:String,
        unique:true
    },
    itemname:{
        type:String
       
    },
    qty:{
        type:Number
       
    },
    price:{
        type:Number
       
    },
    imagepath:{
        type: String,
        default:"alternate.jpg"       
    }
    
    
     
});

const Items = mongoose.model('fooditems',Item);//'details' is mongodb name Details is the schema name;
module.exports=Items;