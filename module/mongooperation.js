/**
 * Created by Layric on 8/13/2015.
 */
var express = require('express');
var router = express.Router();


module.exports = function (mongomodel) {
    router.get('/', function(req,res){

        if(req.accepts('application/json')){
            console.log("here is the query ", req.query);
            mongomodel.find(req.query, function(err,response){
                if(err){
                    res.status(500).json({message:"can't connect to server1"});
                    console.log("Something wrong1");
                }else{
                    res.status(200).json(response);            //201 ? 200         response decide whether is modified
                }
            });
        };
    });
    router.post('/',function(req,res){
        (new mongomodel(req.body)).save(function(err, response){
            if(err) {
                res.status(500).json({message:"can't connect to server2"});
                console.log("Something wrong2");
            }else{
                res.status(201).json(response);
            }
        })
    });
    router.put('/:id',function(req,res){
        mongomodel.findByIdAndUpdate(req.params.id,req.body,function(err,response){
            if(err){
                res.status(500).json({message:"can't connect to server3"});
                console.log("Something wrong3");
            }else{
                res.status(200).json({message:"Update successfully"});
            }
        })
    });
    router.delete('/:id',function(req,res){
        mongomodel.findByIdAndRemove(req.params.id,function(err,response){
            if(err){
                res.status(500).json({message:"can't connect to server4"});
                console.log("Something wrong4");
            }else{
                res.status(200).json({message:"Update successfully"});
            }
        })
    });


    return router;

}