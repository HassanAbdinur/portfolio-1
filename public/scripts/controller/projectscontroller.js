'use strict';
var app = app || {};

(function(module) {
  const projectsController = {}

  projectsController.init = () => {
    $('#home').hide();
    $('#projects').show();
    $('#about').hide();
    $('#github').hide();

  }
  module.projectsController = projectsController;
})(app);
