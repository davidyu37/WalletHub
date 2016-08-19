'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn',
    replace: 'grunt-text-replace'
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    david: appConfig,

    // Settings for grunt-bower-requirejs
    bowerRequirejs: {
      app: {
        rjsConfig: '<%= david.app %>/scripts/main.js',
        options: {
          exclude: ['requirejs', 'json3', 'es5-shim']
        }
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= david.dist %>/*.html']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= david.dist %>/{,*/}*',
            '!<%= david.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    
    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= david.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= david.app %>/images',
        javascriptsDir: '<%= david.app %>/scripts',
        fontsDir: '<%= david.app %>/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= david.dist %>/images/generated'
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },
    

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= david.dist %>'
        }
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= david.app %>',
          dest: '<%= david.dist %>',
          src: [
            '*.{ico,png,txt}',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.',
          dest: '.tmp',
          src: ['bower_components/**/*']
        }, {
          expand: true,
          cwd: '.',
          dest: '<%= david.dist %>',
          src: ['bower_components/requirejs/*']
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= david.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= david.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= david.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= david.dist %>/styles/{,*/}*.css',
          '<%= david.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= david.dist %>/styles/fonts/*'
        ]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: '<%= david.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= david.dist %>'
        }]
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= david.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= david.dist %>/images'
        }]
      }
    },

    // Make sure code styles are up to par
    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= david.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Make sure there are no obvious mistakes
    // jshint: {
    //   options: {
    //     jshintrc: '.jshintrc',
    //     reporter: require('jshint-stylish')
    //   },
    //   all: {
    //     src: [
    //       'Gruntfile.js',
    //       '<%= david.app %>/scripts/{,*/}*.js'
    //     ]
    //   },
    //   test: {
    //     options: {
    //       jshintrc: 'test/.jshintrc'
    //     },
    //     src: ['test/spec/{,*/}*.js']
    //   }
    // },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          // cwd: '<%= david.app %>/scripts',
          src: ['<%= david.app %>/scripts/**/*.js'],
          dest: '.tmp'
        }]
      }
    },

    // Add vendor prefixed styles
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: ['last 1 version']})
        ]
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    replace: {
      test: {
        src: '<%= david.app %>/../test/test-main.js',
        overwrite: true,
        replacements: [{
          from: /paths: {[^}]+}/,
          to: function() {
            return require('fs').readFileSync(grunt.template.process('<%= david.app %>') + '/scripts/main.js').toString().match(/paths: {[^}]+}/);
          }
        }]
      }
    },

    // r.js compile config
    requirejs: {
      dist: {
        options: {
          dir: '<%= david.dist %>/scripts/',
          modules: [{
            name: 'main'
          }],
          preserveLicenseComments: false, // remove all comments
          removeCombined: true,
          baseUrl: '.tmp/<%= david.app %>/scripts',
          mainConfigFile: '.tmp/<%= david.app %>/scripts/main.js',
          optimize: 'uglify2',
          uglify2: {
            mangle: false
          }
        }
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= david.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= david.dist %>/images'
        }]
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= david.dist %>/{,*/}*.html'],
      css: ['<%= david.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= david.dist %>',
          '<%= david.dist %>/images',
          '<%= david.dist %>/styles'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= david.app %>/index.html',
      options: {
        dest: '<%= david.dist %>'
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= david.app %>/scripts/{,*/}*.js'],
        // tasks: ['newer:jshint:all', 'newer:jscs:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        // tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
      },
      compass: {
        files: ['<%= david.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'postcss:server']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= david.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= david.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= david.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
      src: ['<%= david.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'bowerRequirejs:app',
    'replace:test',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'filerev',
    'usemin',
    'requirejs:dist',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    // 'newer:jshint',
    // 'newer:jscs',
    // 'test',
    'build'
  ]);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'bowerRequirejs:app',
      'concurrent:server',
      'postcss:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'bowerRequirejs:app',
    'replace:test',
    'wiredep',
    'concurrent:test',
    'postcss',
    'connect:test',
    'karma'
  ]);
};
