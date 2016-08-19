/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: FourCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.FourCtrl'));

    var FourCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      FourCtrl = $controller('FourCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(FourCtrl.awesomeThings.length).toBe(3);
    });
  });
});
