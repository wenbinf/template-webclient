require.config({
    paths: {
        config: '../config'
    },
    shim: {
        jquery: {
            deps: ['config']
        },
        backbone: {
            deps: ['jquery']
        },
        underscore: {
            deps: ['config']
        }
    }
});

require(['page1', 'page2', 'jquery', 'underscore', 'backbone', 'common'],
        function (page1, page2) {
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
        _.setTabActive('page1');
        // From page1.js
        page1();
    });

    appRouter.on('route:page2', function() {
        console.log('page2');
        _.setTabActive('page2');
        // From page2.js
        page2();
    });

    appRouter.on('route:defaultRoute', function(actions) {
        console.log(actions);
        console.log('page1');
        _.setTabActive('page1');
        // From page1.js
        page1();
    });

    Backbone.history.start();

});
