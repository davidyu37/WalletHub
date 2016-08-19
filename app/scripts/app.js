

var modules = ['walletHubApp.services.Share',

'walletHubApp.directives.Phonenumber',

'walletHubApp.directives.Currency',

'walletHubApp.controllers.MainCtrl',

'walletHubApp.controllers.TimeCtrl',

'walletHubApp.controllers.SevenCtrl',

'walletHubApp.controllers.SenderCtrl',

'walletHubApp.controllers.ReceiverCtrl',

'walletHubApp.controllers.PlaceCtrl',

'walletHubApp.controllers.PersonCtrl',

'walletHubApp.controllers.NavCtrl',

'walletHubApp.controllers.GreatCtrl',

'walletHubApp.controllers.GoodCtrl',

'walletHubApp.controllers.FourCtrl',

'walletHubApp.controllers.EightCtrl',

'walletHubApp.controllers.AwesomeCtrl',

'walletHubApp.controllers.OneCtrl',

'ui.router',

'ngAnimate'
];
/*jshint unused: vars */
define(['angular', 'controllers/one', 'controllers/awesome', 'controllers/eight', 'controllers/four', 'controllers/good', 'controllers/great',  'controllers/nav', 'controllers/person', 'controllers/place', 'controllers/receiver', 'controllers/sender', 'controllers/seven', 'controllers/time', 'directives/currency', 'directives/phonenumber', 'services/share', 'controllers/main']/*deps*/, function (angular, OneCtrl, AwesomeCtrl, EightCtrl, FourCtrl, GoodCtrl, GreatCtrl, NavCtrl, PersonCtrl, PlaceCtrl, ReceiverCtrl, SenderCtrl, SevenCtrl, TimeCtrl, CurrencyDirective, PhonenumberDirective, ShareService, MainCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name walletHubApp
   * @description
   * # walletHubApp
   *
   * Main module of the application.
   */
  return angular
    .module('walletHubApp', modules)
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: './views/main.html',
          controller: 'MainCtrl'
        })
        .state('1', {
          url: '/1/:choice1?choice2',
          templateUrl: '/views/1.html',
          controller: 'OneCtrl',
          resolve: {
            choice: ['$stateParams', function($stateParams) {
              return $stateParams;
            }]
          }
        })
        .state('1.child', {
          views: {
            good: {
              templateUrl: '/views/good.html',
              controller: 'GoodCtrl'
            },
            great: {
              templateUrl: '/views/great.html',
              controller: 'GreatCtrl'
            },
            awesome: {
              templateUrl: '/views/awesome.html',
              controller: 'AwesomeCtrl'
            },
            person: {
              templateUrl: '/views/person.html',
              controller: 'PersonCtrl'
            },
            place: {
              templateUrl: '/views/place.html',
              controller: 'PlaceCtrl'
            },
            time: {
              templateUrl: '/views/time.html',
              controller: 'TimeCtrl'
            }
          }
        })
        .state('2', {
          url: '/2',
          templateUrl: '/views/2.html',
          controller: 'SenderCtrl'
        })
        .state('receive', {
          url: '/receive',
          templateUrl: '/views/2_2.html',
          controller: 'ReceiverCtrl'
        })
        .state('3', {
          url: '/3',
          templateUrl: '/views/3.html'
        })
        .state('4', {
          url: '/4',
          templateUrl: '/views/4.html',
          controller: 'FourCtrl'
        })
        .state('5', {
          url: '/5',
          templateUrl: '/views/5.html'
        })
        .state('6', {
          url: '/6',
          templateUrl: '/views/6.html'
        })
        .state('7', {
          url: '/7',
          templateUrl: '/views/7.html',
          controller: 'SevenCtrl'
        })
        .state('8', {
          url: '/8',
          templateUrl: '/views/8.html',
          controller: 'EightCtrl'
        })
        .state('9', {
          url: '/9',
          templateUrl: '/views/9.html'
        });

        $urlRouterProvider.otherwise('/');
      });
});
