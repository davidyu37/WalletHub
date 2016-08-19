/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: OneCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.OneCtrl'));

    var OneCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      OneCtrl = $controller('OneCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(OneCtrl.awesomeThings.length).toBe(3);
    });
  });
});
