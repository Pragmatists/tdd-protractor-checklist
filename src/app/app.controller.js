angular.module('tdd')
  .controller('AppController', function () {
    var vm = this;

    vm.generate = generate;


    function generate(name, count){
      vm.list = createList();

      function createList(){
        return _.times(count, _.uniqueId.bind(null, name + ' '));
      }
    }
  });
