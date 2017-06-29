'use strict';
var app = app || {};

(function(module) {
  const homeController = {}

  homeController.init = () => {
    $('#home').fadeIn();
    $('#projects').fadeOut();
    $('#about').fadeOut();
    $('#github').fadeOut();
  }
  module.homeController = homeController;
})(app);
