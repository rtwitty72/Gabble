'use strict';
module.exports = function(sequelize, DataTypes) {
  var gab = sequelize.define('gab', {
    gab: DataTypes.STRING(140),
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return gab;
};




db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
