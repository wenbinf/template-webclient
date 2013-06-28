require.config({
    paths: {
        config: '../config'
    }
});

define(['common', 'text!page2Tmpl'], function (common, page2Tmpl) {
    'use strict';

    return function () {
        _.showLoading($);
        setTimeout(function() {
            $('#page').html(_.template(page2Tmpl));
            _.hideLoading($);
        }, 3000);
    };
});
