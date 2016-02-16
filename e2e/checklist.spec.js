//- Poprawne dodawanie zadań.
//- Zaznaczanie zadania jako wykonane.
//- Dodanie odpowiedniej klasy dla tekstu - kiedy zadanie jest wykonane.
//- Poprawne czyszczenie listy wykonanych zadań.

describe('Checklist', function () {

  var matchers
    , checklist;

  beforeEach(function () {
    matchers = require('./matchers.js');
    checklist = require('./checklist.po.js');
    checklist.open();
  });

  it('should include Aloha', function () {
    expect(checklist.pageTitle.getText()).toBe('Checklist');
  });

});
