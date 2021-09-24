import { Sequelize, Model, DataTypes } from 'sequelize';

import { sequelize } from '../sequilize.config';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    modelName: 'user',
    tableName: 'users',
    timestamps: false
})

export default User;

