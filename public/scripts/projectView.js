const projectView = {};

projectView.initIndexPage = function() {
Projects.all.forEach(function(a){
  $('#content').append(a.toHtml());
});
// projectView.handleMenu();
}
