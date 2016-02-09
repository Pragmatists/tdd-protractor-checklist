(function () {
    'use strict';

    angular
        .module('tdd')
        .config(function routerConfig($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('app', {
                    url          : '/example',
                    templateUrl : 'app/app.html',
                    controllerAs : 'app',
                    controller   : 'AppController'
                })
                .state('exercise', {
                    url          : '/checklist',
                    templateUrl : 'app/checklist/checklist.html',
                    controllerAs : 'checklist',
                    controller   : 'ChecklistController'
                });

            $urlRouterProvider.otherwise('/example');

        });

})();
