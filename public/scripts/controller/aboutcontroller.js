'use strict';
var app = app || {};

(function(module) {
  const aboutController = {}

  aboutController.init = () => {
    $('#home').fadeOut();
    $('#projects').fadeOut();
    $('#about').fadeIn();
    $('#github').fadeOut();

  }
  module.aboutController = aboutController;
})(app);
