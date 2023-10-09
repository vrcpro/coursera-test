(function (){
    'use strict'

    angular.module('public').controller('signUpController', signUpController);
    signUpController.$inject = ['MenuService']
    function signUpController(MenuService){
        var $ctrl = this;

        $ctrl.user ={

        };

        $ctrl.submit = function (){
            $ctrl.completed = true;
            MenuService.setUser($ctrl.user);
            
        }
    }



    


})();