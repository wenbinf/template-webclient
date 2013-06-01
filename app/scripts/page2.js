require.config({
    paths: {
        config: '../config',
        common: './common',
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

var LoadPage2 = function(config, common) {
    'use strict';

    //
    // Clean up the page
    //
    common.showLoading($);
    setTimeout(function() {
        $('#page').html('Hello, page2');
        common.hideLoading($);
    }, 3000);
};

define(['config', 'common', 'backbone'],
       function (config, common, Backbone) {
    'use strict';

    return function () { new LoadPage2(config, common, Backbone); };
});
