( function () {
    'use strict';


    angular.module('NarrowIt', []).controller('narrowItController', narrowItController);

    function narrowItController (){
        var narrowIt = this;
        narrowIt.name = "Ray";
    }

})();