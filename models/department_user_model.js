
  module.exports = (sequelize, DataTypes, UserModel) => {

    return sequelize.define('DepartmentUserMappingModel', {
        manager_id: {
            type: DataTypes.INTEGER,
            references: {
              model: UserModel,
              key: 'id'
            }
          }
      }, 
      {
        // Other model options go here
        tableName: 'department_user_mapping',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      });

  }