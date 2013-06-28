require.config({
    paths: {
        config: '../config'
    }
});


define(['jquery', 'underscore'], function () {
    'use strict';

    var showLoadingFunc = function() {
        $('#page').empty();
        $('#page').hide();
        $('#loading').show();
    };

    var hideLoadingFunc = function() {
        $('#loading').hide();
        $('#page').show();
    };

    var setTabActiveFunc = function(name) {
        $('#page1').attr('class', '');
        $('#page2').attr('class', '');
        $('#' + name).attr('class', 'active');
    };

    _.mixin({
        // attributes

        // functions
        showLoading: showLoadingFunc,
        hideLoading: hideLoadingFunc,
        setTabActive: setTabActiveFunc
    });
});
