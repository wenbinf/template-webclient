require.config({
    paths: {
        config: '../config',
        common: './common',
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        mustache: '../components/mustache/mustache'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

var LoadPage1 = function(config, common, Backbone, Mustache) {
    'use strict';

    //
    // Clean up the page
    //
    common.showLoading($);
    setTimeout(function() {
        $('#page').html('Hello, page1');
        common.hideLoading($);
    }, 3000);
};

define(['config', 'common', 'backbone', 'mustache'], 
       function (config, common, Backbone, Mustache) {
    'use strict';

    return function () { LoadPage1(config, common, Backbone, Mustache); };
});
