(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/app/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
