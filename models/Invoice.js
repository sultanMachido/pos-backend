const databaseConnection = require('../database/db');
const Sequelize = require('sequelize');

module.exports = databaseConnection.dbConnect.define(
    'invoice',{
         id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
         },
         orderNumber: {
             type:Sequelize.STRING,
             allowNull: false
          },
          amount: {
             type:Sequelize.INTEGER,
             allowNull: false
          },
         partialPayment:{
            type:Sequelize.INTEGER,
            allowNull: false
        },
        descriptionOfTransaction: {
            type:Sequelize.STRING,
            allowNull: false
         },
         customerName:{
            type:Sequelize.STRING,
            allowNull: false
         },
         customerEmail:{
            type:Sequelize.STRING,
            allowNull: false
         },
         customerAddress:{
            type:Sequelize.STRING,
            allowNull: false
         },
         customerPhoneNumber:{
            type:Sequelize.STRING,
            allowNull: false
         },
         qrCodeUrl:{
            type:Sequelize.STRING,
            allowNull: false
         },
         orderDate:{
            type:Sequelize.STRING,
            allowNull: false
         },
         amountInWords:{
            type:Sequelize.STRING,
            allowNull: false
         },
         balance:{
            type:Sequelize.INTEGER,
            allowNull: false
         },
         customerNote:{
            type:Sequelize.INTEGER,
            allowNull: true
         },
         createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: Sequelize.DATE
      
},{
   tableName:'invoice'
})