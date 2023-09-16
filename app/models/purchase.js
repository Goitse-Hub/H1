// src/models/Purchase.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const User = require('./User');
const Product = require('./products');

const Purchase = sequelize.define('Purchase', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
});

Purchase.belongsTo(User, { foreignKey: 'userId' });
Purchase.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Purchase;
