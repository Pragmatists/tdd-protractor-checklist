'use strict';

describe('List generator', function () {
  var generator;

  beforeEach(function () {
    require('protractor-helpers');
    generator = require('./listGenerator.po.js');
    generator.open();
  });

  it('should include Aloha', function () {
    expect(generator.aloha.getText()).toBe('Aloha! Try me.');
  });

  it('it should generate proper list', function () {
    generator.input('Alan', 9);

    generator.generate();

    expect(generator.generatedItems.count()).toEqual(9);
    expect(generator.generatedItems.first().getText()).toBe('Alan 1');
    expect(generator.generatedItems.last().getText()).toBe('Alan 9');
  });


  it('first element of the list should have class first', function () {
    generator.input('Alan', 9);

    generator.generate();

    expect(generator.generatedItems.first()).toHaveClass('first');
  });

});
