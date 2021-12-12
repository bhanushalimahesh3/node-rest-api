module.exports = (sequelize, DataTypes) => {
  return sequelize.define('DepartmentModel', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
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
}