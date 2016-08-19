/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Share', function () {

    // load the service's module
    beforeEach(module('walletHubApp.services.Share'));

    // instantiate service
    var Share;
    beforeEach(inject(function (_Share_) {
      Share = _Share_;
    }));

    it('should do something', function () {
      expect(!!Share).toBe(true);
    });

  });
});
