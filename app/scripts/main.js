/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-animate': '../../bower_components/angular-animate/angular-animate',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
    jquery: '../../bower_components/jquery/dist/jquery'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-sanitize': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-ui-router': [
      'angular'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    },
    bootstrap: [
      'jquery'
    ]
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-ui-router',
  'angular-sanitize',
  'angular-animate',
  'bootstrap'
], function(angular, app, ngSanitize, ngAnimate) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
