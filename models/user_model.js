const { hashedPassword, comparePassword } = include("helpers/hash_helper");
const { imgBaseUrl } = include("helpers/resource_url_helper");

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
    profile_pic_url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${imgBaseUrl()}${this.profile_pic}`;
      },
      set(value) {
        throw new Error('Do not try to set the `profile_pic_url` value!');
      }
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