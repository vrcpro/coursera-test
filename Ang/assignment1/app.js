(function (){
    'use strict';

    angular.module('LunchCheck',[])

    .controller('LunchController', CheckLunch)
    CheckLunch.$inject = ['$scope', '$filter', '$injector'];
    function CheckLunch ($scope, $filter, $injector){
        
        $scope.list = "";
        $scope.sayMessage = function (){
            
            if($scope.list === ""){ 
                $scope.message = "Please enter some data"
            } else {
            var arrayItems = $scope.list.split(",");
            
            var itemCount = arrayItems.length;
         //  $scope.message = itemCount;
            if(itemCount > 3){
                $scope.message = "Too much!";
            } else if(itemCount <= 3){
                $scope.message ="Enjoy!";
            }

            }
        };
    };

})();