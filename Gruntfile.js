module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    aws: grunt.file.readJSON('/Users/nils/grunt-aws.json'),
    s3: {
      options: {
        key: '<%= aws.key %>',
        secret: '<%= aws.secret %>',
        bucket: 'stbdesign',
        access: 'public-read',
        region: 'eu-west-1',
        headers: {
          //
        }
      },
      dev: {
        options: {
          encodePaths: false,
          maxOperations: 4,
          access: 'public-read'
        },
        upload: [
          {
            //verify: true, //check md5
            src: 'js/dist/*.js',
            dest: 'webmanual/js/dist/'
          },
          {
            src: 'css/*',
            dest: 'webmanual/css/'
          },
          {
            src: '*.html',
            dest: 'webmanual/'
          },
          {
            src: 'images/*',
            dest: 'webmanual/images/'
          },
          {
            src: 'images/stb-sprites/*',
            dest: 'webmanual/images/stb-sprites/'
          },
          {
            src: 'images/stb-icons/*',
            dest: 'webmanual/images/stb-icons/'
          },
          {
            src: 'images/progressrow-lg/*',
            dest: 'webmanual/images/progressrow-lg/'
          },
          {
            src: 'images/progressrow-md/*',
            dest: 'webmanual/images/progressrow-md/'
          },
          {
            src: 'images/stb-icons/stb-slider/*',
            dest: 'webmanual/images/stb-icons/stb-slider/'
          },
          {
            src: 'fonts/*',
            dest: 'webmanual/fonts/'
          },
          {
            src: 'log/*.html',
            dest: 'webmanual/log/'
          }
        ]
      }
    },


    spritesheet: {

      clickable130: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-130.png',
          outputCss: 'tmp-sprites-130.less',
          selector: '.stb-sprite-130'
        },
        files: {
          'less': 'assets/stb-icons/clickable/130x130/*'
        }
      },
      hover130: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-130-hover.png',
          outputCss: 'tmp-sprites-130-hover.less',
          selector: '.stb-sprite-130:hover'
        },
        files: {
          'less': 'assets/stb-icons/hover/130x130/*'
        }
      },
      neutral130: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-130-neutral.png',
          outputCss: 'tmp-sprites-130-neutral.less',
          selector: '.stb-sprite-130.neutral'
        },
        files: {
          'less': 'assets/stb-icons/neutral/130x130/*'
        }
      },


      clickable72: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-72.png',
          outputCss: 'tmp-sprites-72.less',
          selector: '.stb-sprite-72'
        },
        files: {
          'less': 'assets/stb-icons/clickable/72x72/*'
        }
      },
      hover72: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-72-hover.png',
          outputCss: 'tmp-sprites-72-hover.less',
          selector: '.stb-sprite-72:hover'
        },
        files: {
          'less': 'assets/stb-icons/hover/72x72/*'
        }
      },
      neutral72: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-72-neutral.png',
          outputCss: 'tmp-sprites-72-neutral.less',
          selector: '.stb-sprite-72.neutral'
        },
        files: {
          'less': 'assets/stb-icons/neutral/72x72/*'
        }
      },


      clickable32: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-32.png',
          outputCss: 'tmp-sprites-32.less',
          selector: '.stb-sprite-32'
        },
        files: {
          'less': 'assets/stb-icons/clickable/32x32/*'
        }
      },
      hover32: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-32-hover.png',
          outputCss: 'tmp-sprites-32-hover.less',
          selector: '.stb-sprite-32:hover'
        },
        files: {
          'less': 'assets/stb-icons/hover/32x32/*'
        }
      },
      neutral32: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-32-neutral.png',
          outputCss: 'tmp-sprites-32-neutral.less',
          selector: '.stb-sprite-32.neutral'
        },
        files: {
          'less': 'assets/stb-icons/neutral/32x32/*'
        }
      },


      clickable24: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-24.png',
          outputCss: 'tmp-sprites-24.less',
          selector: '.stb-sprite-24'
        },
        files: {
          'less': 'assets/stb-icons/clickable/24x24/*'
        }
      },
      hover24: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-24-hover.png',
          outputCss: 'tmp-sprites-24-hover.less',
          selector: '.stb-sprite-24:hover'
        },
        files: {
          'less': 'assets/stb-icons/hover/24x24/*'
        }
      },
      neutral24: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-24-neutral.png',
          outputCss: 'tmp-sprites-24-neutral.less',
          selector: '.stb-sprite-24.neutral'
        },
        files: {
          'less': 'assets/stb-icons/neutral/24x24/*'
        }
      },


      clickable16: {
        options: {
          httpImagePath: '../images/stb-sprites/stb-sprites-16.png',
          outputImage: '../images/stb-sprites/stb-sprites-16.png',
          outputCss: 'tmp-sprites-16.less',
          selector: '.stb-sprite-16'
        },
        files: {
          'less': 'assets/stb-icons/clickable/16x16/*'
        }
      },
      hover16: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-16-hover.png',
          outputCss: 'tmp-sprites-16-hover.less',
          selector: '.stb-sprite-16:hover'
        },
        files: {
          'less': 'assets/stb-icons/hover/16x16/*'
        }
      },
      neutral16: {
        options: {
          outputImage: '../images/stb-sprites/stb-sprites-16-neutral.png',
          outputCss: 'tmp-sprites-16-neutral.less',
          selector: '.stb-sprite-16.neutral'
        },
        files: {
          'less': 'assets/stb-icons/neutral/16x16/*'
        }
      }

    }, //end:spritesheet



    // compile all the different size/state-files into one:
    recess: {
      dist: {
        options: {
          compile: true
        },
        files: {
          'less/stb-sprites-compiled.less': ['less/tmp-sprites-*.less']
        }
      }
    },

    // remove our tmp-files
    clean: {
      src: 'less/tmp-sprites-*.less'
    },

    shell: {
      makeLog: {
        options: {
          stdout: true
        },
        command: 'cd log;sh generate.sh;cd ..;'
      }
    }


  });

  // grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('node-spritesheet');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');

  // Default task
  grunt.registerTask('sprites', ['spritesheet', 'recess', 'clean']);
  grunt.registerTask('gitlog', ['shell']);

  // do-it-all-task: sprite-gen, git-log, s3 upload
  grunt.registerTask('publish', ['spritesheet', 'recess', 'clean', 'shell']);

};