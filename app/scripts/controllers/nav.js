define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:NavCtrl
   * @description
   * # NavCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.NavCtrl', [])
    .controller('NavCtrl', function () {
      this.navItems = [
      'home',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ];
    });
});
