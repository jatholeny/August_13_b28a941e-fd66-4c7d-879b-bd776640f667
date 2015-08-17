/**
 * Created by Layric on 8/13/2015.
 */

var mongodb = require('../module/mongooperation');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test',function(err){
    if(err){
        console.log("connect fail");
    }else{
        console.log("connect successfully")
    };

})

var contactmodel=mongoose.model('angularpracticeone',{
    name:String,
    email: {
        type:String,
        unique:true
    },
    tel:{
        type:String,
        unique:true
    }
});


module.exports = function(app){
    app.use('/contact',mongodb(contactmodel));
};