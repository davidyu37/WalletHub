define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name walletHubApp.directive:phonenumber
   * @description
   * # phonenumber
   */
  angular.module('walletHubApp.directives.Phonenumber', [])
    .directive('phonenumber', function () {
      return {
        template: '<input type="text" ng-model="val" class="form-control" placeholder="(xxx) xxx-xxxx"/>',
        restrict: 'E',
        require: '?ngModel',
        link: function postLink(scope, elem, attrs, ngModelCtrl) {
      if(!ngModelCtrl) { return; }
      scope.$watch('val', function(newVal, oldVal) {
        //last key added to model
        if(newVal) {
          var filter = newVal.replace(/[a-zA-Z!\?>:;\|<@#%\^&\$\*\+\/\\={}\[\]_]/g, '');

          if(filter.length === 1) {
            if(!(filter[0] === '(')) {
              filter = '(' + filter;
            }
          }
          if(oldVal) {
            //Only format when user is adding not deleting
            if(newVal.length > oldVal.length) {
              if(filter.length === 4) {
                filter += ') ';
              }
              if(filter.length === 9) {
                filter += '-'
              }
              if(filter.length >= 14) {
                filter = filter.slice(0, 14);
              }
            }
          }
          scope.val = filter;
        }
      });
        }
      };
    });
});
