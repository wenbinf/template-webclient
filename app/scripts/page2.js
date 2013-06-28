require.config({
    paths: {
        config: '../config'
    },
    shim: {
        common: {
            deps: ['config']
        },
        text: {
            deps: ['config']
        },
        underscore: {
            deps: ['config']
        }
    }
});

define(['text!page2Tmpl', 'underscore', 'common'], function (page2Tmpl) {
    'use strict';

    return function () {
        _.showLoading($);
        setTimeout(function() {
            $('#page').html(_.template(page2Tmpl));
            _.hideLoading($);
        }, 3000);
    };
});
