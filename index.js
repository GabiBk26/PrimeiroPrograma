const express = require("express");
const path =require ('path');//endereço de cada rota
const {engine} = require("express-handlebars");
const routesAdmim=require('./routes/routesAdmin')
const app = express();
app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowedProtoPropertiesByDefault: true,
        allowedProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars');

app.use ('/',routesAdmim)


app.listen(process.env.port||3000);
console.log("Servidor rodando");