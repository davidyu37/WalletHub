/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: AwesomeCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.AwesomeCtrl'));

    var AwesomeCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      AwesomeCtrl = $controller('AwesomeCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(AwesomeCtrl.awesomeThings.length).toBe(3);
    });
  });
});
