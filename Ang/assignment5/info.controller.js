(function (){
    'use strict'

    angular.module('public').controller('infoController', infoController);

    infoController.$inject = ['MenuService']
    function infoController(MenuService){
        var $ctrl = this;



        $ctrl.user = MenuService.getUser();

    }



    


})();