'use strict';
var app = app || {};

(function(module) {


  const repoView = {};

  const ui = () => {
    let $github = $('#github');

    $github.find('ul').empty();
    $github.show().siblings().hide();
  };

  let render = Handlebars.compile($('#repo-template').html());

  repoView.index = () => {
    ui();

    $('#github ul').append(
      app.repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(app);
