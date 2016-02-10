(function () {
    'use strict';

    angular
        .module('tdd')
        .config(function routerConfig($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('app', {
                  url: '/list-generator',
                  templateUrl: 'app/listGenerator.html',
                    controllerAs : 'app',
                  controller: 'ListGeneratorController'
                })
                .state('exercise', {
                    url          : '/checklist',
                    templateUrl : 'app/checklist/checklist.html',
                    controllerAs : 'checklist',
                    controller   : 'ChecklistController'
                });

          $urlRouterProvider.otherwise('/list-generator');

        });

})();
