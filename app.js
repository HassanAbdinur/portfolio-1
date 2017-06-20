'use strict';

// $('.icon-menu').on('click', function() {
//   $('nav').show();
// });

$('.icon-menu').on('click', function() {
  $('.main-nav').toggleClass( );
});


var allProjects = [];

function Projects (projectData) {
  this.title = projectData.title;
  this.description = projectData.description;
  this.img = projectData.img;
  this.link = projectData.link;
  this.developers = projectData.developers;
}

Projects.prototype.toHtml = function(){

  var template = $('#handle-template').html();

  var templateRender = Handlebars.compile(template);

  // return templateRender(this);
  $('#projects').append(templateRender(this));

};

// $('.projects').append.toHtml();

projectData.forEach(function(object){
  allProjects.push(new Projects(object));
});

allProjects.forEach(function(a){
  console.log('loop');
  $('#content').append(a.toHtml());
});

$('.main-nav').on('click','.tab', function() {
  $('.turtle').hide();
  $('.tab-content').hide();
  $('#' + $(this).data('content')).show();
  console.log($(this).data('content'));
});

// give all the same class and different id
// hide all the class and show one id
