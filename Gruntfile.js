/* global module */

module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({

        dirs: {
            dest: "_site",
            src: "source"
        },
        // let us know if our JS is sound
        jshint: {
            options: {
                "bitwise": true,
                "browser": true,
                "curly": true,
                "eqeqeq": true,
                "eqnull": true,
                "es5": true,
                "esnext": true,
                "immed": true,
                "jquery": true,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "node": true,
                "strict": false,
                "trailing": true,
                "undef": true,
                "globals": {
                    "jQuery": true,
                    "alert": true
                }
            },
            all: [
                'Gruntfile.js',
                'js/demos/*.js'
            ]
        },

        // concatenation and minification all in one
        uglify: {
            dist: {
                files: {
                    'js/build/demos/tabs.js': [
                        'js/demos/tabs.js'
                    ],
                    'js/build/demos/tabs2.js': [
                        'js/demos/tabs2.js'
                    ],
                    'js/build/jquery.min.js': [
                        'js/jquery.js'
                    ],
                }
            }
        },

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: false
                },
                files: {
                    'css/style.css': '_sass/style.scss'
                }
            }
        },

        uncss: {
            dist: {
                // options: {
                //     stylesheets: 'css/style.css',
                //     htmlroot: "<%= dirs.dest %>",
                // },
                src: ["<%= dirs.dest %>/**/*.html"],
                dest: "<%= dirs.dest %>/css/uncss.css"

            }
        },

        // watch our project for changes
        watch: {
            sass: {
                files: [
                    '_sass/*',
                ],
                tasks: ['sass']
            },
            js: {
                files: [
                    '<%= jshint.all %>'
                ],
                tasks: ['jshint', 'uglify', 'requirejs']
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-uncss');



    // register task
    grunt.registerTask('default', [
        // 'jshint',
        'sass',
        // 'uglify',
        'watch'
    ]);

};