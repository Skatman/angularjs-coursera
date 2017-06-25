(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListToBuyController', ShoppingListToBuyController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingListService', ShoppingListService);

ShoppingListToBuyController.$inject = ['ShoppingListService'];
function ShoppingListToBuyController(ShoppingListService) {
  var toBuy = this;
  toBuy.buyItem = function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
  }
  toBuy.items = ShoppingListService.getItemsToBuy();
}


ShoppingListBoughtController.$inject = ['ShoppingListService'];
function ShoppingListBoughtController(ShoppingListService) {
  var bought = this;
  bought.items = ShoppingListService.getBoughtItems();
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {
      name: "Cookies",
      quantity: "10 bags"
    },
    {
      name: "Sugary drinks",
      quantity: "10 bottles"
    },
    {
      name: "Apple pie",
      quantity: "3 pieces"
    },
    {
      name: "Pizza",
      quantity: "3 slices"
    },
    {
      name: "Mashrooms",
      quantity: "1 pack"
    }
  ];

  var alreadyBoughtItems = [],
      allItemsAreBought;

  service.buyItem = function (itemIndex) {
    var item = {
      name: toBuyItems[itemIndex].name,
      quantity: toBuyItems[itemIndex].quantity
    };
    toBuyItems.splice(itemIndex,1);
    alreadyBoughtItems.push(item);
    if (toBuyItems.length == 0)
      allItemsAreBought = true;
  };

  service.getItemsToBuy = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return alreadyBoughtItems;
  };


}

})();
