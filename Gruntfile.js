var config = require('config');

module.exports = function(grunt) {

  var awsConfig = grunt.file.readJSON("config/aws.json");

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      testserver: {
        options: {
          port: 1234,
          base: '.'
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:1234'
      },
    },
    sass: {
      dist: {
        files: {
          'build/fixtures/styles/style.css' : 'app/sass/main.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: 'app/sass/**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['app/scripts/**/*.js']
      },
      templates: {
        files: ['app/scripts/**/templates/**/*']
      },
      index: {
        files: ['app/index.html']
      }
    },
    requirejs: {
      compile: {
        options: {
          mainConfigFile: "app/scripts/init.js",
          name: "../../bower_components/almond/almond",
          out: "dist/scripts/app.js"
        }
      }
    },
    copy: {
      build: {
        files: [
          {expand: false, src: ['bower_components/foundation-icon-fonts/foundation-icons.eot'], dest: 'build/fixtures/styles/foundation-icons.eot'},
          {expand: false, src: ['bower_components/foundation-icon-fonts/foundation-icons.svg'], dest: 'build/fixtures/styles/foundation-icons.svg'},
          {expand: false, src: ['bower_components/foundation-icon-fonts/foundation-icons.ttf'], dest: 'build/fixtures/styles/foundation-icons.ttf'},
          {expand: false, src: ['bower_components/foundation-icon-fonts/foundation-icons.woff'], dest: 'build/fixtures/styles/foundation-icons.woff'},
          {expand: false, src: ['favicon.ico'], dest: 'build/fixtures/favicon.ico'},
          {expand: true, cwd: 'app/images', src: ['**'], dest: 'build/fixtures/images/'}
        ]
      },
      dist: {
        files: [
          {expand: true, cwd: 'build/fixtures/', src: ['**'], dest: 'dist/'},
          {expand: false, src: ['bower_components/modernizr/modernizr.js'], dest: 'dist/scripts/vendor/modernizr.js'}
        ]
      },

    },
    processhtml: {
      options: {
        commentMarker: 'process'
      },
      dist: {
        files: {
          'dist/index.html': ['app/index.html']
        }
      }
    },
    'useminPrepare': {
      html: 'build/fixtures/index.html',
    },
    'usemin': {
      html: 'dist/index.html'
    },
    'clean': {
      dist: {
        src: ['dist']
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/styles/style.min.css': ['dist/styles/style.css']
        }
      }
    },
    filerev: {
      css: {
        src: ['dist/styles/**/*.css'],
      },
      js: {
        src: ['dist/scripts/**/*.js'],
      }
    },
    json_generator: {
      dist: {
        dest: "build/config.json",
        options: {
          apiUrl: config.get('apiUrl')
          //sgasAdminRole: config.get('sgasAdminRole')
        }
      }
    },
    exec: {
      s3push: {
        cmd: 'aws s3 cp dist/ s3://' + awsConfig.S3_BUCKET + ' --recursive --region us-east-1'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-json-generator');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-yaml');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default',[
    'json_generator',
    'sass',
    'copy:build',
    'connect:testserver',
    'open',
    'watch'
  ]);


  grunt.registerTask('build',[
    'json_generator',
    'sass'
  ]);

  grunt.registerTask('dist',[
    'useminPrepare',
    'build',
    'clean:dist',
    'sass:dist',
    'requirejs',
    'copy:build',
    'copy:dist',
    'processhtml',
    'cssmin:dist',
    'useminPrepare',
    'filerev:css',
    'filerev:js',
    'usemin',
  ]);

  grunt.registerTask('publish', [
    'dist',
    'exec:s3push'
  ]);
};
