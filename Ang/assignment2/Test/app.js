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
            foundItems: '<',
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
        toBuy.list = [];
        toBuy.search = '';
        toBuy.menuItems = function(searchTerm) {
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
            
            promise.then(function(items) {
                console.log(items);
                toBuy.list = items;
               //  console.log(items[0]);
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
                
                
                
                //    console.log(response);
                var cats = ['A','B','C','CM','CU','D','DK','DS','F','FR','FY','L','NF','NL','PF','SO','SP','SR','V','VG'];

                for(var t = 0; t < cats.length; t++){
                  //  console.log(response.data['A']['menu_items']);
                    for (var i in response.data[cats[t]]['menu_items']){
                        var listing = response.data[cats[t]]['menu_items'][i]['description'];       
                       // console.log(listing);
                        if(listing.includes(searchTerm)){
                            foundItems.push(listing);
                        }
                    }
                }
                        
                        
                if(searchTerm == '' || foundItems.length == 0){
                    return "Nothing Found";
                } else {       
                    
                
                return foundItems;
                }
            });

        }
    }




})();