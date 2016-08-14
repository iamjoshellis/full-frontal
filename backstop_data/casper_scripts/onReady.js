module.exports = function(casper, scenario, vp) {
  casper.echo('onReady.js', 'INFO');
  casper.waitUntilVisible('div.loaded', function () {
    console.log("backstopjs_ready");
  });
  casper.wait(50);
};
