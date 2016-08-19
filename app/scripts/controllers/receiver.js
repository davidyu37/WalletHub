define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:ReceiverCtrl
   * @description
   * # ReceiverCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.ReceiverCtrl', [])
    .controller('ReceiverCtrl', function (Share, $scope) {
      $scope.data2 = Share.getData();
    });
});
