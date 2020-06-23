const Sequelize = require("sequelize");
const db = require('../db/index')

class Order extends Sequelize.Model { }
Order.init(
    {
        cant: {
            type: Sequelize.INTEGER
        },
    },
    { sequelize: db, modelName: "order" }
);

/* Product.addHook('beforeCreate', (product) => {

}) */

module.exports = Order