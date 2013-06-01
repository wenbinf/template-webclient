//
// Configurations
//
var jar = './test/jar/selenium-server-standalone.jar';
var browser = 'firefox';
var url = 'http://localhost:9000';

module.exports = {

    //
    // Public members
    //
    assert: require('assert'),
    webdriver: require('selenium-webdriver'),
    test: require('selenium-webdriver/testing'),
    remote: require('selenium-webdriver/remote'),
    _: require('underscore'),
    fs: require('fs'),
    url: url,
    server: undefined,
    driver: undefined,

    //
    // Public methods
    //
    start: function() {
        this.assert.ok(this.fs.existsSync(jar), 'The specified jar does not exist: ' + jar);

        this.server = new this.remote.SeleniumServer({jar: jar});
        this.server.start();

        this.driver = new this.webdriver.Builder().
            usingServer(this.server.address()).
            withCapabilities({'browserName': browser}).
            build();
    },

    stop: function() {
        if (!this._.isUndefined(this.driver)) {
            this.driver.quit(); 
        }
        if (!this._.isUndefined(this.server)) {
            this.server.stop();
        }
    }
};
