const express = require("express");
const app = express();
const path=require ('path');//endereço de cada rota
const router=express.Router();//trabalha com as rotas

const {engine} = require("express-handlebars");

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowedProtoPropertiesByDefault: true,
        allowedProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars');
router.get('/',function(req, res){
    res.render('index');
})
router.get('/about',function(req,res){
    res.sendFile(path.join(_dirname+'/about.html'));
})