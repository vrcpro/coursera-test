(function (){
    'use strict'

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/tab');

        $stateProvider
        ,state('home',{
            url:'/',
            templateUrl: 'home.html'
        })
        .state('categories',{
            url: '/catergories',
            templateUrl: '/categories.html',
            controller: 'catCtrl as catCtrl',
            resolve: {
                categories:['hi']
            }
        });

    }
})();