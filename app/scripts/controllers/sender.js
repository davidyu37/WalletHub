define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:SenderCtrl
   * @description
   * # SenderCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.SenderCtrl', [])
    .controller('SenderCtrl', function (Share, $scope, $state) {
      $scope.change = function(data) {
        Share.changeData(data);
        $state.go('receive');
      };
    });
});
