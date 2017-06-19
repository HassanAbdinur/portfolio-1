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


$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
