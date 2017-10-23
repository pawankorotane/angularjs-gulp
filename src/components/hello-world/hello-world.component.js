(function() {
    'use strict';
    angular
        .module('hello-world', ['profile'])
        .component('helloWorld', {
            templateUrl : 'components/hello-world/hello-world.template.html',
            controller: ControllerController,
        });


    ControllerController.$inject = [];
    function ControllerController() {
        var $ctrl = this;

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();


