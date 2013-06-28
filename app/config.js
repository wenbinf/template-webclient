require.config({

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
    }
});

/*global define */
define([], function () {
    'use strict';

    var config = {
        apiBaseUrl: "http://localhost/api",
        
        runningTasksApi: function() { return this.apiBaseUrl + "/myapi" }
    };

    return config;
});
