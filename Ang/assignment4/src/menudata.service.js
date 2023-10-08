(function (){

    'use strict'

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
        var service = this;

        service.getAllCategories = function(){

            return $http({
                method: "GET",
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'}).then(function(response){
                   // console.log(response.data);
                    return response.data;
                });
            

        };

        service.getItemsForCategory = function (categoryShortName){

            return $http({
                method: "GET",
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/%7BcategoryShortName%7D.json'
            }.then(function(response){
                console.log(response.data.menu_items);
                return response.data.menu_items;
            }));

        };

    }
})();