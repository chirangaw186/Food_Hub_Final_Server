const express= require('express');
const routes= require('./routes/api'); 
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');


const app= express();

mongoose.connect('mongodb://chirangaw186:twinturbov8@ds163354.mlab.com:63354/foodhubdb');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors({origin : 'http://localhost:3000' }));


//initialize routes
app.use('/index',routes);

// app.use(bodyparser.jason());


app.listen(process.env.port||4000,function(){
    console.log('now listening for request on port 4000');
});