var ChecklistPage = function () {

  this.open = open;
  this.pageTitle = pageTitle;
  this.addTask = addTask;
  this.tasks = tasks;
  this.toggleDoneCheckboxOfTask = toggleDoneCheckboxOfTask;
  this.cleanDoneTasks = cleanDoneTasks;

  function open() {
    browser.get('/#/checklist')
  }

  function pageTitle() {
    return $('h1');
  }

  function addTask(taskName) {
    $('#name').clear().sendKeys(taskName);
    $('.generator').click();
  }

  function tasks() {
    return $('.checklist').$('ul').$$('li');
  }

  function toggleDoneCheckboxOfTask(taskIndex) {
    this.tasks().$$('input[type=checkbox]').get(taskIndex).click();
  }

  function cleanDoneTasks() {
    $('.clear').click();
  }

};

module.exports = new ChecklistPage();
