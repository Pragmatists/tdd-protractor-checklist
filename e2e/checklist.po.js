module.exports = function checklistPage() {
  var page = {};

  page.open = open;
  page.pageTitle = pageTitle;
  page.addTask = addTask;
  page.tasks = tasks;

  return page;

  function open() {
    browser.get('/#/checklist')
  }

  function pageTitle() {
    return $('h1');
  }

  function addTask(taskName) {
    $('#name').sendKeys(taskName);
    $('button[type=submit]').click();
  }

  function tasks() {
    return $('.checklist').$('ul').$$('li');
  }

}();
