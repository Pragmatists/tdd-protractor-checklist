angular.module('tdd')
    .controller('ChecklistController', function () {

        var vm = this;
        vm.list = [
            {name : 'Clean the dishesh', isDone : false, type: 'work'},
            {name : 'Go to work.', isDone : false, type: 'private'},
            {name : 'Do things.', isDone : true, type: 'home'}
        ];
        vm.types = ['work', 'home', 'private', ''];

        vm.addTask = addTask;
        vm.clearDone = clearDone;

        function addTask(name, type) {
            vm.list.push({name : name, isDone : false, type: type});
        }

        function clearDone() {
             _.remove(vm.list, {isDone: true});
        }
    });
