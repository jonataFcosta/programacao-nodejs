const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(function(req, res, next){
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
 res.setHeader("Access-Control-Allow-Headers", "content-type");
 res.setHeader("Content-Type", "application/json");
 res.setHeader("Access-Control-Allow-Credentials", true);
 next();
});

//CONFIG
app.disable('etag');

const process = require("dotenv").config();

//HANDDLEBARS
const handlebars = require("express-handlebars");
app.engine('handlebars', handlebars.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');
app.set('views', __dirname +'/src/views');

//PAGINATE
const paginate = require("express-paginate");
app.use(paginate.middleware(10, 50));
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));

//ROUTES
require('./src/routes/index-route')(app);
require('./src/routes/filme-route')(app);


app.listen(9090, function(){
    console.log("Servidor Web rodando na porta 9090");
});
