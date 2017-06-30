'use strict';
var app = app || {};

(function(module) {
  const homeController = {}

  homeController.init = () => {
    $('#home').fadeIn();
    $('#about').fadeOut();
    $('#github').fadeOut();
  }
  module.homeController = homeController;
})(app);
