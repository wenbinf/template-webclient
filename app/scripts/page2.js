require.config({
    paths: {
        common: '../common',
        text: '../components/text/text',
        underscore: '../components/underscore/underscore',

        page2Tmpl: 'templates/page1.html'
    }
});

var LoadPage2 = function(common, page2Tmpl) {
    'use strict';

    //
    // Clean up the page
    //
    common.showLoading($);
    setTimeout(function() {
        $('#page').html(_.template(page2Tmpl));
        common.hideLoading($);
    }, 3000);
};

define(['common', 'text!page2Tmpl'],
       function (common, page2Tmpl) {
    'use strict';

    return function () { new LoadPage2(common, page2Tmpl); };
});
