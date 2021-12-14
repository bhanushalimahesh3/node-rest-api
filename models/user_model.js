const { hashedPassword, comparePassword } = include("helpers/hash_helper");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('UserModel', {
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
      allowNull: false,
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deleted_at:{ type: DataTypes.DATE, allowNull:true}
  }, {
    // Other model options go here
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
}