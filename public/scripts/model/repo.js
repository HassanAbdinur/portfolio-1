'use strict';

var app = app || {};
(function(module) {

  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/sharmarkei/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
      .then (data => {

        data.forEach(repo => {
          repos.all.push(repo);
        })
        console.log(repos.all);
        callback();
      })
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
