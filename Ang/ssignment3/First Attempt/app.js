( function (){

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItems);
 
    function foundItems() {
        var ddo = {
          templateUrl: 'foundItems.html',
          scope: {
            onRemove: '&'
          },
          controller: FoundItemsDirectiveController,
          controllerAs: 'list',
          bindToController: true
        };
      
        return ddo;
      }

      function FoundItemsDirectiveController() {
        var list = this;
      
        list.cookiesInList = function () {
          for (var i = 0; i < list.items.length; i++) {
            var name = list.items[i].name;
            if (name.toLowerCase().indexOf("cookie") !== -1) {
              return true;
            }
          }
      
          return false;
        };
      }




MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function (searchTerm){
        console.log("This is search functino");
        var response = $http({
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
        }).then(function (result) {
            // process result and only keep items that match
            
            for( var i = 0; i < result.length; i++){
                if (result[i] == searchTerm){
                    foundItems.push(result[i]);
                }
            }
            
            var foundItems = [];
            console.log(foundItems);
            // return processed items
            return foundItems;
        });
        return response;
    }

}
    
NarrowItDownController.$inject = ['MenuSearchService'];    
function NarrowItDownController (){
    var narrowIt = this;

    narrowIt.name = "ray";
    narrowIt.found = MenuSearchService.getMatchedMenuItems();

}


})();