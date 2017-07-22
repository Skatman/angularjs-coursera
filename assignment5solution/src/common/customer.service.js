(function () {
"use strict";

angular.module('common')
.service('CustomerService', CustomerService);


CustomerService.$inject = ['$http', 'ApiPath'];
function CustomerService($http, ApiPath) {
  var service = this;

  service.saveCustomerInfo = function (customer) {
    service.customer = customer;
  };


  service.getCustomerInfo = function () {
    return service.customer;
  };

}


})();
