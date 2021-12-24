const dbConfig = include("config/database");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const DepartmentModel = include("models/department_model")(sequelize, DataTypes);
const GenderModel = include("models/gender_model")(sequelize, DataTypes);
const RoleModel = include("models/role_model")(sequelize, DataTypes);
const UserModel = include("models/user_model")(sequelize, DataTypes);
const DepartmentUserMappingModel = include("models/department_user_model")(sequelize, DataTypes, UserModel);

// define associations
UserModel.belongsTo(GenderModel, {
    foreignKey: 'gender_id',
    as: 'gender'
    })

UserModel.belongsTo(RoleModel, {
    foreignKey: 'role_id',
    as: 'role'
    })  

UserModel.belongsToMany(DepartmentModel, { through: DepartmentUserMappingModel, foreignKey: 'user_id',
as: 'departments' });
DepartmentModel.belongsToMany(UserModel, { through: DepartmentUserMappingModel, foreignKey: 'department_id',
as: 'users' });
UserModel.belongsTo(DepartmentUserMappingModel, {
  foreignKey: 'manager_id',
  as: 'manager'
  })

module.exports = {
    DepartmentModel,
    GenderModel,
    RoleModel,
    UserModel,
    sequelize,
    Sequelize,
    DepartmentUserMappingModel
};