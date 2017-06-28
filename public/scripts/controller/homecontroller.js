'use strict';
var app = app || {};

(function(module) {
  const homeController = {}

  homeController.init = () => {
    $('#home').show();
    $('#projects').hide();
    $('#about').hide();
  }
  module.homeController = homeController;
})(app);
