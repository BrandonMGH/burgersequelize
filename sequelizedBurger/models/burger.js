module.exports = function(sequelize, DataTypes) {
 const burger = sequelize.define("burger", {
     Burger_Name: DataTypes.STRING,
     Devoured: DataTypes.BOOLEAN 
 })
  return burger
}; 

