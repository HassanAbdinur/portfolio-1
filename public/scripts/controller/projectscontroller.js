'use strict';
var app = app || {};

(function(module) {
  const projectsController = {}

  projectsController.init = () => {
    $('#home').fadeOut();
    $('#projects').fadeIn();
    $('#about').fadeOut();
    $('#github').fadeOut();

  }
  module.projectsController = projectsController;
})(app);
