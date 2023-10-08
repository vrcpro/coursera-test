(function (){

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService(){
        var service = this;

        service.getAllCategories = function(){

        };

        service.getItemsForCategory = function (categoryShortName){

        };

    }
})();