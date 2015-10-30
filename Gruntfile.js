/* global module */

module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({

        dirs: {
            dest: "_site",
            src: "source"
        },

        // concatenation and minification all in one
        uglify: {
            dist: {
                files: {
                    'js/build/angular/angular.js': [
                        'bower_components/angular/angular.min.js'
                    ],
                    'js/build/script.min.js': [
                        'js/lazy-load-css.js',
                    ]
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

        critical: {
            test: {
                options: {
                    base: './',
                    css: [
                        'css/style.css',
                    ],
                    width: 320,
                    height: 320
                },
                src: '_site/index.html',
                dest: '_includes/build/critical.css'
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
                    'js/**/*.js'
                ],
                tasks: ['js']
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
    grunt.loadNpmTasks('grunt-critical');

    // register task
    grunt.registerTask('default', [
        // 'jshint',
        'sass',
        'uglify',
        'watch'
    ]);

};
