require.config({
    paths: {
        config: '../config'
    }
});


define(['common', 'text!page1Tmpl', 'underscore'], function (common, page1Tmpl) {
    'use strict';

    return function () {
        _.showLoading($);
        setTimeout(function() {
            $('#page').html(page1Tmpl);
            _.hideLoading($);
        }, 3000);
    };
});
