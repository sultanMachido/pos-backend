const Sequelize = require('sequelize');
require('dotenv').config();

console.log(process.env.DB_NAME,'db name')

const dbConnect = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:"mysql",
    // operatorsAliases: false,
    port:3306,
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
});

 let checkConnection = dbConnect.authenticate()
  .then(()=> console.log('connected...'))
  .catch((err)=>console.log(err));

let db ={
     dbConnect,
     checkConnection,
     Sequelize
}  



module.exports = db;
