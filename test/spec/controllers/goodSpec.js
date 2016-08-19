/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: GoodCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.GoodCtrl'));

    var GoodCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      GoodCtrl = $controller('GoodCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(GoodCtrl.awesomeThings.length).toBe(3);
    });
  });
});
