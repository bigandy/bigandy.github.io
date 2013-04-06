'use strict';
module.exports = function(grunt) {

    grunt.initConfig({

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
                'js/*.js'
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

        // style (Sass) compilation via Compass
        compass: {
            dist: {
                options: {
                    sassDir: 'css',
                    cssDir: 'css',
                    imagesDir: 'images',
                    images: 'images',
                    javascriptsDir: 'js/build',
                    fontsDir: 'fonts',
                    environment: 'production',
                    outputStyle: 'expanded',
                    relativeAssets: true,
                    noLineComments: true,
                    force: true
                }
            }
        },

        // watch our project for changes
        watch: {
            compass: {
                files: [
                    'css/*',
                    'css/inuit.css/**/*',
                    'css/inuit/*'
                ],
                tasks: ['compass']
            },
            js: {
                files: [
                    '<%= jshint.all %>'
                ],
                tasks: ['jshint', 'uglify']
            }
        }

    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register task
    grunt.registerTask('default', [
        'jshint',
        'compass',
        'uglify',
        'watch'
    ]);

};