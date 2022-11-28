const env = require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize  = new Sequelize(env.parsed.DB_NAME,env.parsed.DB_USER,env.parsed.DB_PASSW,{
    host:env.parsed.DB_HOST,
    port:env.parsed.DB_PORT,
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

sequelize.authenticate().then(function(){
    console.log("sucesso");
}).catch(function(error){
    console.log("error:"+error);
});