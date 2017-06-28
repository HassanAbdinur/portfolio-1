'use strict';
var app = app || {};

(function(module) {
  const githubController = {}

  githubController.init = () => {
    $('#home').hide();
    $('#projects').hide();
    $('#about').hide();
    $('#github').show();

    app.repos.requestRepos(app.repoView.index);

  }
  module.githubController = githubController;
})(app);
