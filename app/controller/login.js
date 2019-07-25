var jwt=require('jsonwebtoken');
var globalconfig=require('../../config/globalconfig');  //read config file
var db=require('../db/db');

module.exports={

    logincheck:function(req,res)
    {
        var token=jwt.sign({id:'random'},globalconfig.secret,{expiresIn:globalconfig.expiresIn});
        console.log("body==>",req.body)        
        if(db.users_list.some(user =>user.name === req.body.name && user.pass === req.body.pass)){
            res.json({"result":"success",code:"1","access_token":token});
         } else{
            res.json({"result":"failed",code:"-1","message":"Invalid Credentials"});
         }       
        
    },

    displaydata:function(req,res)
    {
        var token= req.headers['x-access-token'];

        jwt.verify(token,globalconfig.secret,function(err,decoded)
        {
            if(err) return res.status(500).send(globalconfig.tokenerrormsg);            
            res.json({"response":db.users_list});

        })
        
    },


}