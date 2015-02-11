var jsb = require('jsb');
var pkg = require('./package.json');

jsb.onReady = function(win, ipc) {
  win.loadUrl('file://' + __dirname + '/index.html');

  return '';
};

jsb.onLoad = function(win, ipc) {
  var script = 'var win = require("remote").getCurrentWindow();';

  return script;
};

jsb.init(pkg);
