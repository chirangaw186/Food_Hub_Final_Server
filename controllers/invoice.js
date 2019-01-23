const express= require('express');
const router = express.Router();

const InvoiceItems = require('../models/invoicedb');
const OrderedItems = require('../models/ordereditems');


module.exports.allInvoices=(req,res,next)=>{
    InvoiceItems.find({shopid:req.params.id}, (err, items) => {
        console.log(items);
      if (err) return res.json({ success: false, error: err });
      return res.json(items);
    });
}

module.exports.orderedItems=(req,res,next)=> {
    OrderedItems.find({invoiceID:req.params.id}, (err, items) => {
        console.log(items);
      if (err) return res.json({ success: false, error: err });
      return res.json(items);
    });
}

module.exports.deleteInvoice=(req,res,next)=> {
   
    InvoiceItems.deleteOne(req.body,(err, items) => {
        console.log(items);
      if (err) return res.json({ success: false, error: err });
      return res.json(items);
    });

}

module.exports.findByDate=(req,res,next)=> {
    console.log(req.body.date);
  InvoiceItems.find({date: {$regex : ".*"+req.body.date}, shopid:req.body.shopid }, (err, items) => {
      console.log(items);
    if (err) return res.json({ success: false, error: err });
    return res.json(items);
  });
}




