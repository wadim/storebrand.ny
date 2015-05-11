module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      main: {
        src: ['javascript/modernizr.custom.js','javascript/jquery.min.js','javascript/jquery.eqheight.js',
              'javascript/jquery-ui-1.11.0.js','javascript/jquery.hotkeys.js','javascript/bootstrap.min.js',
              'javascript/typeahead.bundle.min.js','javascript/stb-search.js','javascript/stb-common.js',
              'javascript/stb-page-padding.js','javascript/stb-video.js','javascript/bootstrapValidator-0.5.3.js'],
        dest: 'javascript/stb-all.max.js'
      },
      webmanual: {
        src: ['javascript/modernizr.custom.js','javascript/jquery.min.js','javascript/jquery.eqheight.js',
          'javascript/jquery-ui-1.11.0.js','javascript/jquery.hotkeys.js','javascript/bootstrap.min.js',
          'javascript/typeahead.bundle.min.js','javascript/stb-search.js','javascript/stb-common.js',
          'javascript/stb-page-padding.js','javascript/stb-video.js','javascript/bootstrapValidator-0.5.3.js',
          'javascript/moment.min.js','javascript/bootstrap-datetimepicker.min.js','javascript/bootstrap-datetimepicker.nb.js','javascript/jquery.slider.all.js',
          'javascript/webmanual.core.js'],
        dest: 'javascript/stb-all.webmanual.max.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'javascript/stb-all.min.js': ['<%= concat.main.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'javascript/stb-page-padding.js','javascript/stb-common.js','javascript/stb-search.js','javascript/stb-video.js'],
      ignore_warning: {
        options: {
          '-W030': true
        },
        src: ['javascript/stb-page-padding.js']
      },
      options: {
        // options here to override JSHint defaults
        curly: false,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          ieCompat: true
        },
        files: {
          // target.css file: source.less file
          "css/stb-all.min.css": "less/stb-main.less",
          "css/stb-all-webmanual.min.css": "less/stb-main-webmanual.less"
        }
      }
    },
    watch: {
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true,
          livereload: true
        }
      },
      script: {
        files: ['Gruntfile.js', 'javascript/stb-page-padding.js','javascript/stb-common.js','javascript/stb-search.js','javascript/stb-video.js'],
        tasks: ['jshint','concat','uglify'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: './',
          livereload: true
        }
      }
    }



  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task
  grunt.registerTask('default', ['less','jshint','concat','uglify','watch']);
  grunt.registerTask('serve',   ['connect','less','jshint','concat','uglify','watch']);
};