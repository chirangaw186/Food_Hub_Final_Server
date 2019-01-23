
const express= require('express');
const router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;
//models
const User = require('../models/secuser');

const Deliverer=require('../models/deliverers');
//get a list from db
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
//controllerrs
const login = require('../controllers/login');
const shop_cust = require('../controllers/shop_cust');
const deliv = require('../controllers/deliv');
const fooditems = require('../controllers/fooditems');
const Invoice = require('../controllers/invoice');


router.post('/getuser',login.login);
router.post('/abc',login.signup);
router.post('/verifyemail',login.verifyemail);
router.post('/forgetpw',login.forgetpw);

router.put('/edit/:id',shop_cust.editall);
router.put('/changepassword/:id',shop_cust.changepwall);
router.get('/view/:id',shop_cust.viewprofile);
router.get('/showinvoice',shop_cust.showinvoice);

router.post('/del',deliv.registerDeliverer)
router.get('/showdel/:id',deliv.showDeliverers);
router.put('/editdel/:id',deliv.editDel)
router.get('/delview/:id',deliv.viewDel);

//add
router.post('/fooddet',fooditems.addfood);
router.post('/imageup/:id',fooditems.imgupld);

//show
router.get('/retrieve',fooditems.retrieveitems);
router.post('/deletef',fooditems.deleteItem);

//update
router.post('/retrieveone',fooditems.retOneItem);
router.post('/foodupdate/:id',fooditems.updateFood);

//invoice
router.get('/retrieveallinvoices/:id',Invoice.allInvoices);
router.get('/retrieveordereditems/:id',Invoice.orderedItems);
router.post('/deletefromInvoice',Invoice.deleteInvoice);
router.post('/invoicesbydate',Invoice.findByDate);

//deliverer
router.get('/retdel',deliv.retrieveDeliverer);
router.post('/assignD/:id',deliv.assignDeliverer);





module.exports=router;


