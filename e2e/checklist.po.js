module.exports = function checklistPage() {

  return {
    open: open,
    pageTitle: $('h1')
  };

  function open() {
    browser.get('/#/checklist')
  }

}();
