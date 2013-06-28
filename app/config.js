
/*global define */
define([], function () {
    'use strict';

    var config = {
        apiBaseUrl: "http://localhost/api",
        
        runningTasksApi: function() { return this.apiBaseUrl + "/myapi" }
    };

    return config;
});
