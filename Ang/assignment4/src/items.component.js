(function(){
    'use strict'
    angular.module('MenuApp').component('items', {
        templateUrl: 'src/itemsTemp.html',
        bindings: {
            items: '<'
        }
    });


}
)();