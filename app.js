'use strict';

var articles = [];

function NewData(fillIn) {
  this.title = fillIn.title;
  this.category = fillIn.category;
  this.author = fillIn.author;
  this.authorUrl = fillIn.authorUrl;
  this.publishedOn = fillIn.publishedOn;
  this.body = fillIn.body;
}

NewData.prototype.toHTML = function () {
  $newArticle = $('li.template').clone();
  $newArticle.removeClass('template');
  $newArticle.addClass('test');
  $newArticle.find()
};
