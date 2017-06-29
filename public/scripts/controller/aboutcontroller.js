'use strict';
var app = app || {};

(function(module) {
  const aboutController = {}

  aboutController.init = () => {
    $('#home').hide();
    $('#projects').hide();
    $('#about').show();
    $('#github').hide();

  }
  module.aboutController = aboutController;
})(app);
