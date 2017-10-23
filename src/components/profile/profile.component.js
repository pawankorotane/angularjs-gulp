(function() {
    'use strict';
    angular
        .module('profile',[])
        .component('profile', {
            templateUrl:'components/profile/profile.template.html',
            controller: profileCtrl
        });

        profileCtrl.$inject = [];
    function profileCtrl() {
        var $ctrl = this;
    }
})();