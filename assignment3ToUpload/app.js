(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.directive('itemsLoader',ItemsLoaderDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.search = "";

  ctrl.items = [];

  ctrl.getFilteredMenuItems = function(){
    if (ctrl.search == ""){
      ctrl.items = [];
      ctrl.message = true;
    } else {
      ctrl.loader = true;
      MenuSearchService.getMatchedMenuItems(ctrl.search).then(function(data){
        ctrl.items = data;
        ctrl.message = false;
        ctrl.loader = false;
      });
    }
  }

  ctrl.removeItem = function (itemIndex) {
    ctrl.items.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems = function(search){
    var foundItems = [];
    return $http({
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (result) {
      result.data.menu_items.forEach(function(menuItem){
        if (menuItem.description.toLowerCase().indexOf(search.toLowerCase())> -1){
          foundItems.push(menuItem);
        }
      })

      return foundItems;
    });
  };
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'itemsList.html',
    scope: {
      items: '<',
      message: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

function ItemsLoaderDirective() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
  };

  return ddo;
}

})();
