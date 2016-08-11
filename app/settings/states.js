(function () {
    'use strict';

    angular
        .module('ch-business-model-canvas')
        .config(States);

    States.$inject = ['$stateProvider', '$urlRouterProvider'];
    function States($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/not-found");
        //
        // Now set up the states
        $stateProvider
            .state('not-found', {
                url: '/not-found',
                views: {
                    'main-view': { templateUrl: 'views/not-found/not-found.tmpl.html' }
                }
            })
            .state('index', {
                url: '',
                views: {
                    'main-view': {
                        templateUrl: 'views/index/index.tmpl.html',
                        controller: 'IndexController'
                    }
                }
            });
    }
})();