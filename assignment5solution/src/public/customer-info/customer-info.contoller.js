(function () {
"use strict";

angular.module('public')
.controller('CustomerInfoController', CustomerInfoController);

CustomerInfoController.$inject = ['menuItems', 'customerInfo', 'ApiPath'];
function CustomerInfoController(menuItems, customerInfo, ApiPath) {

  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.customer = customerInfo;

  if (customerInfo){
    for (var i = 0; i<menuItems.menu_items.length; i++){
      if (menuItems.menu_items[i].short_name.toLowerCase() == $ctrl.customer.menuNumber.toLowerCase()){
        $ctrl.menuItem = menuItems.menu_items[i];
        console.log($ctrl.menuItem);
        break;
      }
    }
  }

}


})();
