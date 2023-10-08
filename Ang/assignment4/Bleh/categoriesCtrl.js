(function (){

    angular.module('MenuApp').controller('catCtrl',  catCtrl);

    catCtrl.$inject = ['MenuDataService', 'cats'];

    function catCtrl(MenuDataService, cats){
        var catCtrl = this;

        catCtrl.cats = cats;
    }



})();