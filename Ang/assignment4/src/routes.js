(function () {
'use strict'
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.html'
    })
   .state('cats', {
      url: '/cats',
      templateUrl: 'src/categories.html',
      controller: 'categoriesController as categoriesController',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }

    })
    .state('items', {
      url: '/cats/{categoryShortName}',
      templateUrl: 'src/items.html',
      controller: 'itemsController as itemsController',
      params: {
        categoryShortName: null,
        categoryName: null
      },
      resolve: {
        items:['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }
})();