const env = require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize  = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSW,{
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

sequelize.authenticate().then(function(){
    console.log("DBconn sucesso!");
}).catch(function(error){
    console.log("DBconn error:"+error);
});



module.exports = {sequelize,Sequelize};