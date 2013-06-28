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

define(['text!page1Tmpl', 'underscore', 'common'], function (page1Tmpl) {
    'use strict';

    return function () {
        _.showLoading($);
        setTimeout(function() {
            $('#page').html(page1Tmpl);
            _.hideLoading($);
        }, 3000);
    };
});
