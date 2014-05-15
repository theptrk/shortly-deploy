module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
<<<<<<< HEAD
      dist: {
        src: [
            // 'app/*.js',
            // 'app/**/*.js',
            // 'lib/*.js',
            'public/client/*.js',
            'public/views/*.js'
          ],
          dest: 'public/dist/production.js',
        }
      },

      mochaTest: {
        test: {
          options: {
            reporter: 'spec'
          },
          src: ['test/**/*.js']
        }
      },

      nodemon: {
        dev: {
          script: 'server.js'
        }
      },

      uglify: {
        build: {
          src: 'public/dist/production.js',
          dest: 'public/dist/production.min.js'
        }
      },

      jshint: {
=======
      options: {
        //separator: ';',
      },
      dist: {
        src: [
          'public/client/app.js',
          'public/client/link.js',
          'public/client/links.js',
          'public/client/linkView.js',
          'public/client/linksView.js',
          'public/client/createLinkView.js',
          'public/client/router.js'
        ],
        dest: 'public/client/minified/built.js',
      },
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
      my_target: {
        files: {
          'public/minified/output.min.js': [
            'public/minified/output.min.js',
          ]
        }
      }
    },

    jshint: {
      files: [ // we would usually have a client task and a server task
        //'app/**/*.js', 
        'public/client/**/*.js',
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'public/lib/**/*.js',
          'public/dist/**/*.js'
        ]
      }
    },

    cssmin: {
      minify: {
        src: ['public/style.css'],
        dest: 'public/style.min.css'
      }
    },

    watch: {
      scripts: {
>>>>>>> master
        files: [
          'Gruntfile.js',
          'server-config.js',
          'server.js',
          'app/*.js',
          'app/**/*.js',
          'lib/*.js',
          'public/client/*.js',
          'public/views/*.js'
        ],
        options: {
          force: 'true',
          jshintrc: '.jshintrc',
          ignores: [
            'public/lib/**/*.js',
            'public/dist/**/*.js'
          ]
        }
      },
<<<<<<< HEAD

      cssmin: {
        minify: {
          expand: true,
          cwd: 'public/',
          src: ['*.css', '!*.min.css'],
          dest: 'public/dist/',
          ext: '.min.css'
        }
      },

      watch: {
        scripts: {
          files: [
            'public/client/**/*.js',
            'public/lib/**/*.js',
          ],
          tasks: [
            'concat',
            'uglify'
          ]
        },
        css: {
          files: 'public/*.css',
          tasks: ['cssmin']
        }
      },

      shell: {
        prodServer: {
          command: [
            'git push origin master',
            'git push azure master'
          ].join('&&')
        }
      },
    });
=======
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      multiple: {
        command: [
          'git push origin master',
          'git push azure master'
        ].join('&&')
      }
    },

  });
>>>>>>> master

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
      cmd: 'grunt',
      grunt: true,
      args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  grunt.registerTask('server-prod', [
    'shell:multiple'
  ]);

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'concat',
    'uglify',
<<<<<<< HEAD
    'cssmin'
=======
    'cssmin',
    'mochaTest'
>>>>>>> master
  ]);

  grunt.registerTask('deploy', function(n) {
    if(grunt.option('prod')) {
<<<<<<< HEAD
      grunt.task.run(['shell']);
=======
      grunt.task.run([ 'server-prod' ]);
>>>>>>> master
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

<<<<<<< HEAD
  grunt.registerTask('deploy', [
    'build',
    'upload'
  ]);


=======
>>>>>>> master
};
