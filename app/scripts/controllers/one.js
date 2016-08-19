define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:OneCtrl
   * @description
   * # OneCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.OneCtrl', [])
    .controller('OneCtrl', function (choice, $state, $scope) {
      if(choice.choice1) {
        $scope.child = choice.choice1;
          $scope.param1 = choice.choice1;
        if(choice.choice2) {
          $scope.grandchild = choice.choice2;
              $scope.param2 = choice.choice2;
        }
      }
      $state.go('.child');

      $scope.goToRoute = function() {
          var p = $state.params;
          if(p.choice1 === $scope.param1 && p.choice2 === $scope.param2) {
              return;
          } else {
              $state.go('1', {choice1: $scope.param1, choice2: $scope.param2});
          }
      };
    });
});
