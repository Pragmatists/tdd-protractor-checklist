module.exports = function checklistPage() {
  var page = {};

  page.open = open;
  page.pageTitle = pageTitle;
  page.addTask = addTask;
  page.tasks = tasks;
  page.toggleDoneCheckboxOfTask = toggleDoneCheckboxOfTask;
  page.cleanDoneTasks = cleanDoneTasks;

  return page;

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
    page.tasks().$$('input[type=checkbox]').get(taskIndex).click();
  }

  function cleanDoneTasks() {
    $('.clear').click();
  }

}();
