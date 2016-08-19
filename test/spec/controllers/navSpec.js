/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: NavCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.NavCtrl'));

    var NavCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      NavCtrl = $controller('NavCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(NavCtrl.awesomeThings.length).toBe(3);
    });
  });
});
