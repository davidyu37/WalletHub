define(['angular', 'services/focus'], function (angular, Focus) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:EightCtrl
   * @description
   * # EightCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.EightCtrl', ['walletHubApp.services.Focus'])
    .controller('EightCtrl', function ($scope, Focus) {
      $scope.$watch('number1', function(newVal, oldVal) {
        if(newVal) {
          
          if(newVal.length >= 5) {
            Focus('two');
            $scope.number1 = $scope.number1.slice(0, 5);
          }
          
        }
      });
      $scope.$watch('number2', function(newVal, oldVal) {
        if(newVal) {
          
          if(newVal.length >= 5) {
            Focus('three');
            $scope.number2 = $scope.number2.slice(0, 5);
          }
          
        }
      });
      $scope.$watch('number3', function(newVal, oldVal) {
        if(newVal) {
          if(newVal.length >= 5) {
            var oldNum = $scope.number3;
            $scope.number3 = oldNum.slice(0, 5);
          }
        }
      });

      $scope.back = function(val, number) {
        if(val.length === 0) {
            Focus(number);
        }
      };
    });
});
