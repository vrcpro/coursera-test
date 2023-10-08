(function () {
    'use strict'
    angular.module('MenuApp').controller('itemCtrl', itemCtrl);

    itemCtrl.$inject = ['MenuDataService', 'items'];

    function itemCtrl(MenuDataService, items){
        var itemCtrl = this;

        itemCtrl.items = items;
    }

})();