require.config({
    paths: {
        common: './common',
        text: '../components/text/text',
        underscore: '../components/underscore/underscore',

        page1Tmpl: 'templates/page1.html'
    }
});

var LoadPage1 = function(common, page1Tmpl) {
    'use strict';

    common.showLoading($);
    setTimeout(function() {
        $('#page').html(page1Tmpl);
        common.hideLoading($);
    }, 3000);
};

define(['common', 'text!page1Tmpl', 'underscore'],
       function (common, page1Tmpl) {
    'use strict';

    return function () { new LoadPage1(common, page1Tmpl); };
});
