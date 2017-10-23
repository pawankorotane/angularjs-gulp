(function() {
    'use strict';
    angular
        .module('profile',[])
        .component('profile', {
            templateUrl:'components/profile/profile.template.html',
            controller: ControllerController
        });

    ControllerController.$inject = [];
    function ControllerController() {
        var $ctrl = this;
    }
})();