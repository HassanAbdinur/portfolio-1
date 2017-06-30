'use strict';
var app = app || {};

(function(module) {
  const githubController = {}

  githubController.init = () => {
    $('#home').fadeOut();
    $('#about').fadeOut();
    $('#github').fadeIn();

    app.repos.requestRepos(app.repoView.index);

  }
  module.githubController = githubController;
})(app);
