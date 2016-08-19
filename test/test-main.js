var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

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
        'angular' : {'exports' : 'angular'},
        'angular-sanitize': ['angular'],
        'angular-animate': ['angular'],
        'angular-mocks': {
          deps:['angular'],
          'exports':'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
