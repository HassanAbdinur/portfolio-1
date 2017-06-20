'use strict';

function Projects (projectData) {
  this.title = projectData.title;
  this.description = projectData.description;
  this.img = projectData.img;
  this.link = projectData.link;
  this.developers = projectData.developers;
}

Projects.all = [];

Projects.prototype.toHtml = function(){

  var template = $('#handle-template').html();

  var templateRender = Handlebars.compile(template);

  // return templateRender(this);
  $('#projects').append(templateRender(this));

};

// $('.projects').append.toHtml();
Projects.loadAll = function(projectData) {
  projectData.forEach(function(object){
    allProjects.push(new Projects(object));
  });
}

Projects.fetchAll(function() {
  if(localStorage.projectData) {
    Projects.loadAll(JSON.parse(localStorage.projectData));
    projectView.initIndexPage();
  } else {
    $.getJSON('fillIn.json', function(data) {
    localStorage.projectData = JSON.stringify(data);
    Projects.loadAll(data);
    projectView.initIndexPage();
  }
});



// $('.main-nav').on('click','.tab', function() {
//   $('.turtle').hide();
//   $('.tab-content').hide();
//   $('#' + $(this).data('content')).show();
//   console.log($(this).data('content'));
// });

// give all the same class and different id
// hide all the class and show one id
