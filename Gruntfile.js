// Generated on 2013-05-09 using generator-webapp 0.1.7
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.option('force', true);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        test: 'test',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        watch: {
            livereload: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.test %>/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload', 'jshint'],
                options: {
                    jshintrc: '.jshintrc',
                },
            },
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        mochaTest: {
            all: {
                options: {
                    //                    reporter: 'Nyan',
                    reporter: 'Spec',
                },
                src: [grunt.option('test-file') || 'test/*test*.js']
            }
        },

        requirejs: {
            js: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
//                    mainConfigFile: 'app/config.js',
    paths: {
        "requirejs": "components/requirejs/require",
        "jquery": "components/jquery/jquery",
        "underscore": "components/underscore/underscore",
        "backbone": "components/backbone/backbone",
        "text": "components/text/text",

        "page1Tmpl": "scripts/templates/page1.html",
        "page2Tmpl": "scripts/templates/page2.html",

        "main": "scripts/main",
        "common": "scripts/common",
        "page1": "scripts/page1",
        "page2": "scripts/page2"
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        main: {
            deps: ['page1', 'page2', 'backbone']
        },
        page1: {
            deps: ['common']
        },
        page2: {
            deps: ['common']
        }
    },

                    baseUrl: "app",
                    name: 'main',
                    out: "dist/scripts/main.js",
                    
                    include: "requirejs",
                    inlineText: true,
                    optimize: 'uglify2'
                }
            },

            css: {
                options: {
                    cssIn: 'app/styles/main.css',
                    out: 'dist/styles/main.css',
                    optimizeCss: "standard.keepLines",
                    cssImportIgnore: null
                }
            }
        },

        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt,html,js}',
                        '.htaccess',
                        'images/{,*/}*.*'
                    ]
                }]
            }
        },

        replace: {
            scriptPath: {
                src: ['<%= yeoman.app%>/index.html'],
                dest: '<%= yeoman.dist%>/index.html',
                replacements: [{ 
                    from: 'components/requirejs/require.js',
                    to: 'scripts/main.js' 
                }]
            }
        },

        bower: {
            options: {
                exclude: ['modernizr']
            },
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', [
            'clean:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);

    grunt.registerTask('dist', [
        'clean:dist',
        'requirejs:js',
        'requirejs:css',
        'copy',
        'replace:scriptPath'
    ]);

    grunt.registerTask('test', [
        'clean:server',
        'connect:test',
        'mochaTest'
    ]);

    grunt.registerTask('default', function() {
        var tasks = [
            'jshint'
        ];
        grunt.option('force', true);
        grunt.task.run(tasks);
    });
};
