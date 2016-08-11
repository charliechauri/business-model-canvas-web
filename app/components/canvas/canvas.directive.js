(function () {
    'use strict';

    angular
        .module('ch-business-model-canvas')
        .directive('chCanvas', chCanvas);

    chCanvas.$inject = [];
    function chCanvas() {
        // Usage:
        //  <ch-canvas> </ch-canvas>
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: 'CanvasController',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {},
            templateUrl: 'components/canvas/canvas.tmpl.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();