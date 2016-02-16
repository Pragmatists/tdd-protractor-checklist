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
    expect(checklist.tasks().count()).toBe(0);
  });

  it('adds a task', function () {
    checklist.addTask('tiny task');

    expect(checklist.tasks().count()).toBe(1);
    expect(checklist.tasks().first().getText()).toBe('tiny task');
  });

  it('does not mark task as done by default', function () {
    checklist.addTask('task');

    expect(checklist.tasks().first().$('.name').getCssValue('text-decoration')).not.toBe('line-through');
  });

  it('marks task as done', function () {
    checklist.addTask('task');

    checklist.toggleDoneCheckboxOfTask(0);

    expect(checklist.tasks().first().$('.name').getCssValue('text-decoration')).toBe('line-through');
  });

});
