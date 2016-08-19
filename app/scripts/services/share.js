define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name walletHubApp.Share
   * @description
   * # Share
   * Service in the walletHubApp.
   */
  angular.module('walletHubApp.services.Share', [])
	.factory('Share', function(){
      var data = {};
      return { 
        getData: function() {
          return data;
        },
        changeData: function(newData) {
          data = newData;
        }
      };
  });
});
