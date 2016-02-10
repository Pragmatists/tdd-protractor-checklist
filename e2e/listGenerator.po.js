/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var ListGeneratorPage = function () {
  this.aloha = $('h1'); // same as element(by.css('h1'));
  this.generatedItems = $$('li'); // same as element.all(by.css('li'));

  this.open = function () {
    browser.get('/#/list-generator');
  };

  this.input = function (name, number) {
    element(by.id('name')).sendKeys(name);
    element(by.id('count')).sendKeys(number);
  };

  this.generate = function () {
    $('.generator').click();
    browser.waitForAngular();
  };
};


module.exports = new ListGeneratorPage();
