(function () {
    'use strict';

    angular
        .module('ch-business-model-canvas')
        .controller('IndexController', IndexController);

    IndexController.$inject = [];
    function IndexController() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            console.log('Index controller\'s been invoked');
        }
    }
})();