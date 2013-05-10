require.config({
    paths: {
        jquery: '../components/jquery/jquery'
    }
});


var showLoadingFunc = function($) {
    'use strict';
    $('#page').empty();
    $('#page').hide();
    $('#loading').show();
};

var hideLoadingFunc = function($) {
    'use strict';
    $('#loading').hide();
    $('#page').show();
};

var setTabActiveFunc = function($, name) {
    this.currentTab.attr('class', '');
    this.currentTab = $('#'+name);
    this.currentTab.attr('class', 'active');
};

var timeDiffFunc = function (started, updated) {
    'use strict';
    var startDate = new Date(started);
    var endDate = new Date(updated);
    var difference = endDate.getTime() - startDate.getTime();
    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24;
    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60;
    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60;
    var secondsDifference = Math.floor(difference/1000);
    return hoursDifference + ' hrs ' + minutesDifference + ' mins ' + secondsDifference + ' secs';
};

var timeFormatFunc = function (time) {
    'use strict';
    var d = new Date(time);
    var currHour = d.getHours();
    var currMin = d.getMinutes();
    var currSec = d.getSeconds();
    var currDate = d.getDate();
    var currMonth = d.getMonth() + 1; //Months are zero based
    var currYear = d.getFullYear();
    return currYear + '-' + currMonth + '-' + currDate + ' ' + currHour + ':' +
        currMin + ':' + currSec;
};

define(['jquery'], function ($) {
    'use strict';
    return {
        // attributes
        currentTab: $('#page1'),

        // functions
        showLoading: showLoadingFunc,
        hideLoading: hideLoadingFunc,
        setTabActive: setTabActiveFunc,
        timeDiff: timeDiffFunc,
        timeFormat: timeFormatFunc
    };
});
