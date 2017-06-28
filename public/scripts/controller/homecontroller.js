'use strict';
var app = app || {};

(function(module) {
  const homeController = {}

  homeController.init = () => {
    $('#home').show();
    $('#projects').hide();
    $('#about').hide();
    $('#github').hide();

  }
  module.homeController = homeController;
})(app);
