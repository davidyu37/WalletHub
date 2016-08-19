/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SevenCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.SevenCtrl'));

    var SevenCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SevenCtrl = $controller('SevenCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(SevenCtrl.awesomeThings.length).toBe(3);
    });
  });
});
