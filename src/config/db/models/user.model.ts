import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgres::memory:');

export default class User extends Model {
    /*
    static associate(models) {
        User.belongsToMany(models.Image, { through: "IMAGE_CATEGORY", as: "images", timestamps: false });
    }
    */
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize,
    modelName: 'user',
    tableName: 'USERS',
    timestamps: false
});

