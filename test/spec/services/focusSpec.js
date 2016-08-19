/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Focus', function () {

    // load the service's module
    beforeEach(module('walletHubApp.services.Focus'));

    // instantiate service
    var Focus;
    beforeEach(inject(function (_Focus_) {
      Focus = _Focus_;
    }));

    it('should do something', function () {
      expect(!!Focus).toBe(true);
    });

  });
});
