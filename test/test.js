var config = require('./config.js');

var assert = config.assert,
fs = config.fs,
webdriver = config.webdriver,
test = config.test,
remote = config.remote;

test.describe('A test', function() {

    test.before(function() {
        config.start();
        driver = config.driver;
        server = config.server;
    });

    test.beforeEach(function() {
        driver.get(config.url);
    });

    test.it('Test case 1', function() {
    });

    test.it('Test case 2', function() {
    });

    test.after(function() { 
        config.stop();
    });
});

