const { getDBHost,
        getDBName,
        getDBUserName,
        getDBPassword } = include('helpers/env_helper');

module.exports = {
    HOST: getDBHost(),
    USER: getDBUserName(),
    PASSWORD: getDBPassword(),
    DB: getDBName(),
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };