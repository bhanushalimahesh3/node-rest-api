const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://yolo_teamnest_user:123456@localhost:5432/notifications');

const GenderModel = sequelize.define('GenderModel', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted_at:{ type: DataTypes.DATE, allowNull:true}
  }, {
    // Other model options go here
    tableName: 'genders',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

const UserModel = sequelize.define('UserModel', {
            // Model attributes are defined here
            name: {
              type: DataTypes.STRING,
              allowNull: false
            },
            email: {
              type: DataTypes.STRING,
              allowNull: false
            },
            password: {
              type: DataTypes.STRING,
              allowNull: false
            },
            deleted_at:{ type: DataTypes.DATE, allowNull:true},
            gender_id: {
              type: DataTypes.INTEGER,
              references: {
                // This is a reference to another model
                model: GenderModel,
                 // This is the column name of the referenced model
                key: 'id',
              }
            }
          }, {
            // Other model options go here
            tableName: 'users',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
          });

const DepartmentModel = sequelize.define('DepartmentModel', {
        // Model attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        deleted_at:{ type: DataTypes.DATE, allowNull:true}
      }, {
        // Other model options go here
        tableName: 'departments',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      });

const DepartmentUserMappingModel = sequelize.define('DepartmentUserMappingModel', {
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            // This is a reference to another model
            model: UserModel,
            // This is the column name of the referenced model
            key: 'id',
          }
        },
        department_id: {
          type: DataTypes.INTEGER,
          references: {
            // This is a reference to another model
            model: DepartmentModel,
            // This is the column name of the referenced model
            key: 'id',
          }
        }
      }, {
        // Other model options go here
        tableName: 'department_user_mapping',
        timestamps: false
      });

// sync
//UserModel.sync()

// drop exist table and create new
//UserModel.sync({ force: true })

// alter exisitng table if any new changes
//UserModel.sync({alter: true})

// `sequelize.define` also returns the model
//console.log(UserModel === sequelize.models.UserModel); // true

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();

UserModel.belongsTo(GenderModel, {
  foreignKey: 'gender_id',
  as: 'gender'
})

UserModel.belongsToMany(DepartmentModel, { through: DepartmentUserMappingModel, as:'departments', foreignKey: 'user_id' });

module.exports = {
  UserModel,
  GenderModel,
  DepartmentModel,
  DepartmentUserMappingModel
}