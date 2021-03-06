/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: GreatCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.GreatCtrl'));

    var GreatCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      GreatCtrl = $controller('GreatCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(GreatCtrl.awesomeThings.length).toBe(3);
    });
  });
});
