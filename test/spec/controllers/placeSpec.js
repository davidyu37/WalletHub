/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: PlaceCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.PlaceCtrl'));

    var PlaceCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      PlaceCtrl = $controller('PlaceCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(PlaceCtrl.awesomeThings.length).toBe(3);
    });
  });
});
