(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['menuItems', 'customerService'];
function SignUpController(menuItems, customerService) {

  var $ctrl = this;
  $ctrl.menuItems = menuItems;
  $ctrl.saveInfoSuccess = false;

  $ctrl.correctMenuNumber = function(menuNumber) {
    for (var i = 0; i<$ctrl.menuItems.menu_items.length; i++){
      if (menuNumber !== undefined && $ctrl.menuItems.menu_items[i].short_name.toLowerCase() == menuNumber.toLowerCase()){
        return true;
      }
    }
    return false;
  };

  $ctrl.saveCustomerInfo = function(){
    customerService.saveCustomerInfo($ctrl.user);
    $ctrl.saveInfoSuccess = true;
  }

}


})();
