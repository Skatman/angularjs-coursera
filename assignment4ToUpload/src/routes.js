(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/app/templates/home.template.html'
  })

  // Categories list page
  .state('menuCategoriesList', {
    url: '/menu-categories-list',
    templateUrl: 'src/app/templates/main-categories.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  //Category items list page
  .state('categoryItems', {
    url: '/menu-categories-list/{categoryShortName}/{categoryName}/category-items',
    templateUrl: 'src/app/templates/main-items.template.html',
    controller: "CategoryItemsController as itemsList",
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
