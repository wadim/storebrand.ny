module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      main: {
        src: ['src/js/modernizr.custom.js',
              './node_modules/jquery/dist/jquery.min.js',
              'src/js/jquery.eqheight.js',
              'src/js/jquery-ui-1.11.0.js',
              'src/js/jquery.hotkeys.js',
              'src/js/bootstrap.min.js',
              'src/js/typeahead.bundle.min.js',
              'src/js/stb-search.js',
              'src/js/stb-common.js',
              'src/js/stb-page-padding.js',
              'src/js/stb-video.js',
              'src/js/bootstrapValidator-0.5.3.js',
              'src/js/stb-spin.v2.3.2.js'],
        dest: './src/build-tmp/stb-all.max.js'
      },
      webmanual: {
        src: ['src/js/modernizr.custom.js','src/js/jquery.min.js','src/js/jquery.eqheight.js',
          'src/js/jquery-ui-1.11.0.js','src/js/jquery.hotkeys.js','src/js/bootstrap.min.js',
          'src/js/typeahead.bundle.min.js','src/js/stb-search.js','src/js/stb-common.js',
          'src/js/stb-page-padding.js','src/js/stb-video.js','src/js/bootstrapValidator-0.5.3.js',
          'src/js/moment.min.js','src/js/bootstrap-datetimepicker.min.js','src/js/bootstrap-datetimepicker.nb.js','src/js/jquery.slider.all.js',
          'src/js/webmanual.core.js'],
        dest: './src/build-tmp/stb-all.webmanual.max.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          './public/js/stb-all.min.js': ['<%= concat.main.dest %>']
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
          "./public/css/stb-all.min.css": "./src/less/stb-main.less",
          "./public/css/stb-all-webmanual.min.css": "./src/less/stb-main-webmanual.less"
        }
      }
    },

    copy: {
      main: {
        src: './webmanual.html',
        dest: './public/webmanual.html'
      },
      images: {
        expand: true,
        src: './images/*',
        dest: './public/'
      },
      fonts: {
        expand: true,
        src: './fonts/*',
        dest: './public/'
      }
    },

    watch: {
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['./src/less/**/*.less', './webmanual.html'],
        tasks: ['less', 'copy'],
        options: {
          nospawn: true,
          livereload: true
        }
      },
      script: {
        files: ['Gruntfile.js', 'src/js/*.js'],
        tasks: ['concat','uglify'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: './public/',
          livereload: true
        }
      }
    }



  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task
  grunt.registerTask('default', ['less','concat','uglify','watch']);
  grunt.registerTask('serve',   ['connect','less','concat','uglify','watch']);
  grunt.registerTask('dist',    ['less','concat','uglify']);
};