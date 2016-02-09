'use strict';

describe('The main view', function () {
    var page, matchers;

    beforeEach(function () {
        browser.get('/index.html');
        page = require('./main.po');
        matchers = require('./matchers.js');

    });

    it('should include Aloha', function () {
        expect(page.aloha.getText()).toBe('Aloha! Try me.');
    });

    it('it should generate proper list', function () {
        page.nameInput.sendKeys('Alan');
        page.numberInput.sendKeys(9);
        page.generateButton.click();

        browser.waitForAngular();

        expect(page.list.isPresent()).toBe(true);
        expect(page.listElem.count()).toEqual(9);
        expect(page.listElem.first().getText()).toBe('Alan 1');
        expect(page.listElem.last().getText()).toBe('Alan 9');
    });


    it('first element of the list should have class first', function () {
        page.nameInput.sendKeys('Alan');
        page.numberInput.sendKeys(9);
        page.generateButton.click();

        browser.waitForAngular();

        expect(page.listElem.first()).hasClass('first');
    });

});
