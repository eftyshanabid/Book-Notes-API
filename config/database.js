const Sequelize = require('sequelize');
const DB = new Sequelize('postgres://postges:postgres@localhost:5433/bookApi');

DB.authenticate()
.then(()=>{
    console.log("database connection successful");
})
.catch((err)=>{
    console.log("error connecting to database",err)
})

module.exports = {DB};