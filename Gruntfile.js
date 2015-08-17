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

    // register task
    grunt.registerTask('default', [
        // 'jshint',
        'sass',
        'uglify',
        'watch'
    ]);

};
