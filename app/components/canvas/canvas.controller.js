(function () {
    'use strict';

    angular
        .module('ch-business-model-canvas')
        .controller('CanvasController', CanvasController);

    CanvasController.$inject = [];
    function CanvasController() {
        var vm = this;

        vm.displayedActions = {
            keyPartners: false
        };

        vm.toggleDisplayActions = toggleDisplayActions;

        activate();

        ////////////////

        function activate() { }

        function toggleDisplayActions(type, show) {
            vm.displayedActions[type] = show;
        }
    }
})();