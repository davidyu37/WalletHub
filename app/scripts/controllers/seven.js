define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:SevenCtrl
   * @description
   * # SevenCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.SevenCtrl', [])
    .controller('SevenCtrl', function ($scope) {
      $scope.number1 = 0;
      $scope.number2 = 0;
      $scope.number3 = 0;
      $scope.editing = false;
      var oldSum;


      $scope.$watchGroup(['number1', 'number2', 'number3'], function(newVals, oldVals) {
        if(newVals) {
          if(!($scope.editing)) {
            var sum = 0;
            newVals.forEach(function(val) {
              sum += val;
            });
            $scope.sum = sum;
            oldSum = sum;
          }
        }
      });

      $scope.add = function() {
        $scope.editing = false;
      };  
      
      $scope.spread = function(value) {
        var diff = value - oldSum;
        //Calculate percentage of each number to sum and get how much should each number be added or reduced
        var p1 = ($scope.number1 / oldSum) * diff;
        var p2 = ($scope.number2 / oldSum) * diff;
        var p3 = ($scope.number3 / oldSum) * diff;

        var spread = diff / 3;
        $scope.number1 += p1;
        $scope.number2 += p2;
        $scope.number3 += p3;
        $scope.editing = true;
      };
    });
});
