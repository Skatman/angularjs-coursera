(function(){

  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',function($scope){
    $scope.message = '';
    $scope.messageColor = '';
    $scope.dishes = '';

    var getDishesAmount = function(str){
      if (str.length == 0)
        return 0;
      return str.split(',').length;
    }

    $scope.checkButtonClick = function() {
      var dishesAmount = getDishesAmount($scope.dishes);
      if (dishesAmount == 0){
        $scope.message = 'Please enter data first'
        $scope.messageColor = '';
      }
      else {
        if (dishesAmount < 4){
          $scope.message = 'Enjoy!';
          $scope.messageColor = 'green';
        }
        else {
          $scope.message ='Too much!';
          $scope.messageColor = 'red';
        }
      }
    }
  });
}
)();
