(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['MenuDataService', 'items', '$stateParams'];
function CategoryItemsController(MenuDataService, items, $stateParams) {
  var itemsList = this;
  itemsList.items = items.data.menu_items;
  itemsList.category = $stateParams.categoryName;

  itemsList.changeDescriptionDisplayState = function ($event){
    var element = $event.currentTarget;
    $(element).find('.item-description').slideToggle(800);
  }
}

})();
