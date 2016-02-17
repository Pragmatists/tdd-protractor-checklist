describe('Checklist', function () {

  var matchers
    , checklist;

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

  it('adds another task', function () {
    checklist.addTask('first task');
    checklist.addTask('second task');

    expect(checklist.tasks().count()).toBe(2);
    expect(checklist.tasks().first().getText()).toBe('first task');
    expect(checklist.tasks().last().getText()).toBe('second task');
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

  it('removes done tasks', function () {
    checklist.addTask('first task');
    checklist.addTask('second task');

    checklist.toggleDoneCheckboxOfTask(0);
    checklist.cleanDoneTasks();

    expect(checklist.tasks().count()).toBe(1);
    expect(checklist.tasks().first().getText()).toBe('second task');
  });

});
