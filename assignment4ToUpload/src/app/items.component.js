(function () {
'use strict';

angular.module('MenuApp')
.component('categoryItemsList', {
  templateUrl: 'src/app/templates/items.template.html',
  bindings: {
    items: '<',
    onClick: '&'
  }
});

})();
