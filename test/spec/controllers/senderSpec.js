/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SenderCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.SenderCtrl'));

    var SenderCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SenderCtrl = $controller('SenderCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(SenderCtrl.awesomeThings.length).toBe(3);
    });
  });
});
