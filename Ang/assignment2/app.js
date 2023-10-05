(function (){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    listCheckOff.$inject['$scope','$filter', '$injector'];



    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        toBuy.name = "Ray";
        toBuy.items = ShoppingListCheckOffService.getItems();
    //    toBuy.moveToBought = ShoppingListCheckOffService.moveToBought(itemIndex);
        toBuy.removeItem = function (itemIndex){
            ShoppingListCheckOffService.removeItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBought();
        alreadyBought.removeItem = function (itemIndex){
            ShoppingListCheckOffService.removeItem(itemIndex);
        };
        
    }

    function ShoppingListCheckOffService(){
        var service = this;
        
        var toBuyItems = [
            {name: 'apple', quantity: 12},
            {name: 'pizza', quantity: 22},
            {name: 'sushi', quantity: 2},
            {name: 'chips', quantity: 112},
            {name: 'tots', quantity: 1}

    
    ];
        var alreadyBoughtItems = [];
        
        //showList.toBuy =ShoppingListCheckOffService.toBuy;
        //showList.alreadyBought = ShoppingListCheckOffService.alreadyBought;
        
        service.getItems = function () {
            return toBuyItems;
        }

        service.getBought = function () {
            return alreadyBoughtItems;
        }

        service.removeItem = function (itemIndex) {
            alreadyBoughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1);
        }

     //   service.addItemToBought (item.name, item.quantity){
      //      return 
     //   }
    
    }




})();