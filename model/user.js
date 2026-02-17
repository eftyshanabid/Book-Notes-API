const { DataTypes } = require('sequelize');
const DB = require('../config/database');

const User = DB.define('User',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

User.sync()
.then(()=>{
    console.log("user table created successfully");
})
.catch((err)=>{
    console.log("error creating user table",err)
})

module.exports = User