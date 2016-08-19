/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ReceiverCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.ReceiverCtrl'));

    var ReceiverCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ReceiverCtrl = $controller('ReceiverCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(ReceiverCtrl.awesomeThings.length).toBe(3);
    });
  });
});
