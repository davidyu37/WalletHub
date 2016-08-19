define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name walletHubApp.directive:currency
   * @description
   * # currency
   */
  angular.module('walletHubApp.directives.Currency', [])
    .directive('currency', function () {
      return {
        template: '<input type="text" ng-model="val" class="form-control" placeholder="$"/>',
        restrict: 'E',
        require: '?ngModel',
        link: function postLink(scope, elem, attrs, ngModelCtrl) {
          if(!ngModelCtrl) { return; }
          scope.$watch('val', function(newVal, oldVal) {
            //last key added to model
            if(newVal) {
              var final = '';
              var digit = newVal.match(/[\d]/g);
              if(digit) {
                var numberOfComma = digit.length / 3;

                if(digit.length > 3) {
                  digit = insertComma(numberOfComma, digit);
                }
                final = '$' + digit.join('');
              }

              scope.val = final;
            }
          });

          function insertComma(times, arr) {
            //Counter is responsible for counting the commas
            var counter = 0;
            for(var i=1; i < times; i++) {
              arr.splice(arr.length - (3*i + counter), 0, ',');
              counter++;
            }
            return arr;
          }

        }
      };
    });
});
