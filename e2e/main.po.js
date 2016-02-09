/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.aloha = element(by.css('h1'));
  this.nameInput = element(by.css('#name'));
  this.numberInput = element(by.css('#count'));
  this.generateButton = element(by.css('.generator'));
  this.list = element(by.css('ul'));
  this.listElem = element.all(by.css('li'));
};

module.exports = new MainPage();
