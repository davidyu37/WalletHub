/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: EightCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.EightCtrl'));

    var EightCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      EightCtrl = $controller('EightCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(EightCtrl.awesomeThings.length).toBe(3);
    });
  });
});
