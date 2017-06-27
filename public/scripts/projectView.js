var projectView = {};

// projectView.handleMenu = function() {
//   $('.main-nav').on('click','.tab', function() {
//     // $('.turtle').hide();
//     $('.tab-content').hide();
//     // $('#home').hide();
//     $('#' + $(this).data('content')).show();
//     console.log($(this).data('content'));
//   });
// }

projectView.initIndexPage = function() {
  Projects.all.forEach(function(a){
    $('#content').append(a.toHtml());
  });
  projectView.handleMenu();
}
