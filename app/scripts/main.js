require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        common: './common',
        page1: './page1',
        page2: './page2'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['common', 'jquery', 'backbone', 'page1', 'page2'],
        function (common, $, Backbone, page1, page2) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            page1: 'page1',
            page2: 'page2',
            '*actions': 'defaultRoute'
        }
    });

    var appRouter = new AppRouter();

    appRouter.on('route:page1', function() {
        console.log('page1');
        common.setTabActive($, 'page1');
        // From page1.js
        page1();
    });

    appRouter.on('route:page2', function() {
        console.log('page2');
        common.setTabActive($, 'page2');
        // From page2.js
        page2();
    });

    appRouter.on('route:defaultRoute', function(actions) {
        console.log(actions);
        console.log('page1');
        common.setTabActive($, 'page1');
        // From page1.js
        page1();
    });

    Backbone.history.start();

});
