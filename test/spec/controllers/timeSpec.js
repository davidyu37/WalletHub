/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: TimeCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.TimeCtrl'));

    var TimeCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      TimeCtrl = $controller('TimeCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(TimeCtrl.awesomeThings.length).toBe(3);
    });
  });
});
