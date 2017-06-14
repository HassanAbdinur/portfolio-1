'use strict';

function NewData(fillIn) {
  this.title = fillIn.title;
  this.category = fillIn.category;
  this.author = fillIn.author;
  this.authorUrl = fillIn.authorUrl;
  this.publishedOn = fillIn.publishedOn;
  this.body = fillIn.body;
}

NewData.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');

  $newArticle.find('.byline a').html(this.authorUrl);
