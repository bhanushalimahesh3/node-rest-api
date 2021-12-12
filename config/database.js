// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('postgres://yolo_teamnest_user:123456@localhost:5432/notifications1')

// try{
//     sequelize.authenticate().then(function(data){
//         console.log(data)
//     }).reject(function(err){
//         console.log('rejected')
//     })
// } catch(err){
//     console.log("mahesh")
// }

// module.exports = sequelize;


module.exports = {
    HOST: "localhost",
    USER: "yolo_teamnest_user",
    PASSWORD: "123456",
    DB: "notifications",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };