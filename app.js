'use strict';

var allProjects = [];

function Projects (projectData) {
  this.title = projectData.title;
  this.description = projectData.description;
  this.img = projectData.img;
  this.link = projectData.link;
  this.developers = projectData.developers;
}

Projects.prototype.toHtml = function(){
  var $newProjects = $('.template').clone();
  $newProjects.removeClass();
  $newProjects.find('.title').html(this.title);
  $newProjects.find('a').attr('href', this.link);
  $newProjects.find('.test-run').attr('src', this.img);
  $newProjects.find('p').html(this.description);
  return $newProjects;
};

projectData.forEach(function(object){
  allProjects.push(new Projects(object));
});

allProjects.forEach(function(a){
  console.log('loop');
  $('#content').append(a.toHtml());
});

$('.main-nav').on('click','.tab', function() {
  $('.turtle').hide();
  $('#' + $(this).data('content')).show();
  console.log($(this).data('content'));
});

// give all the same class and different id
// hide all the class and show one id
