'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_gab = sequelize.define('user_gab', {
    user_id: DataTypes.INTEGER,
    gabid: DataTypes.INTEGER,
    like: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_gab;
};





db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
