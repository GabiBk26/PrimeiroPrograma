const express = require("express");

const router=express.router();// trabalha com as rotas
 const path=require ('path');//enderço de cada ro
router.get('/',function(req,res){
   res.render ('index');
  
 })
 router.get('/about',function(req,res){
    res.sendfile(path.join(__dirname+'../about.html'));
 })

 module.exports =router;