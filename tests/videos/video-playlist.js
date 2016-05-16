module.exports = {
  'Video Asset Contains a Small Priority Playlist - ONE' : function(browser){
    browser
      .url('http://www.usatoday.com/story/news/world/2015/03/26/germanwings-plane-crash/70473800/')
      .waitForElementPresent('.inline-story-video-gallery', 1000)
      .assert.urlContains('germanwings-plane-crash')
      .end();
  },

  'Video Asset Contains a Small Priority Playlist - TWO' : function(browser){
    browser
      .url('http://www.usatoday.com/story/news/world/2015/03/26/germanwings-plane-crash/70473800/')
      .waitForElementPresent('.inline-story-video-gallery', 1000)
      .assert.urlContains('germanwings-plane-crash')
      .end();
  },

  afterEach: function(client, done) {

    client.sauce_job(client.currentTest.results.failed);

    setTimeout(function() {
      done();
    }, 1000);

  }
};
