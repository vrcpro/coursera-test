(function (){
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItems);

    function foundItems() {
        var ddo = {
          templateUrl: 'items.html',
          scope: {
            items: '<',
            onRemove: '&'
          },
          controller: NarrowItDownController,
          controllerAs: 'toBuy',
          bindToController: true
        };
      
        return ddo;
      }

    NarrowItDownController.$inject = ['MenuSearchService'];
    
    function NarrowItDownController(MenuSearchService){
        var toBuy = this;
        
        toBuy.search = '';
        toBuy.menuItems = function(searchTerm) {
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
            console.log("entered this function");
            promise.then(function(items) {
                if (items > 0) {
                    toBuy.message = '';
                    toBuy.foundItems = items;
                } else {
                    toBuy.message = 'Nothing found!';
                    toBuy.foundItems = [];
                }
            });
        };

    }
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var service = this;
        
        service.getMatchedMenuItems = function (searchTerm){

            return $http({
                method: "GET",
                url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
            }).then(function(response) {
                var foundItems = [];
                    
                
                console.log(foundItems);
                return foundItems;
            });

        }
    }




})();