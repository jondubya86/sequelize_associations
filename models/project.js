"use strict";

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Project.hasMany(models.UserProject)
      }
    }
  });

  return Project;
};
