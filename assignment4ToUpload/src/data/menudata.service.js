(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;
  service.getAllCategories = function(){
    return $http({ url: (ApiBasePath + "/categories.json") })
          .then(function (result) {
              var categories = result;
              return categories;
          });
  };

  service.getItemsForCategory = function(categoryShortName){
    return $http({ url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName) })
          .then(function (result) {
              var items = result;
              return items;
          });
  };
}

})();
