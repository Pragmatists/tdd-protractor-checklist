angular.module('tdd')
    .controller('ChecklistController', function () {

        var vm = this;
        vm.list = [
            //{name : 'Clean the dishesh', isDone : false},
            //{name : 'Go to work.', isDone : false},
            //{name : 'Do things.', isDone : true}
        ];

        vm.addTask = addTask;
        vm.clearDone = clearDone;

        function addTask(name) {
            vm.list.push({name : name, isDone : false});
        }

        function clearDone() {
             _.remove(vm.list, {isDone: true});
        }
    });
