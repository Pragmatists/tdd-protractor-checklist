//- Zaznaczanie zadania jako wykonane.
//- Dodanie odpowiedniej klasy dla tekstu - kiedy zadanie jest wykonane.
//- Poprawne czyszczenie listy wykonanych zadań.

describe('Checklist', function () {

  var matchers
    , checklist;

  var NUMBER_OF_TASKS_AT_INIT = 3;

  beforeEach(function () {
    matchers = require('./matchers.js');
    checklist = require('./checklist.po.js');
    checklist.open();
  });

  it('has title', function () {
    expect(checklist.pageTitle().getText()).toBe('Checklist');
  });

  it('has some tasks at init', function () {
    expect(checklist.tasks().count()).toBe(NUMBER_OF_TASKS_AT_INIT);
  });

  it('adds a task', function () {
    checklist.addTask('tiny task');

    expect(checklist.tasks().count()).toBe(NUMBER_OF_TASKS_AT_INIT + 1);
    expect(checklist.tasks().get(3).getText()).toBe('tiny task');
  });

});
