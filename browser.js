var gpg = require('gpgwrap');
var jsb = require('jsb');
var pkg = require('./package.json');
var recipients = [];

jsb.onReady = function(win, ipc) {
  win.loadUrl('file://' + __dirname + '/index.html');

  ipc.on('recipients', function(e) {
    recipients = gpg.list();
    console.log(recipients);
    e.returnValue = recipients;
  });

  return '';
};

jsb.onLoad = function(win, ipc) {
  var script = 'var win = require("remote").getCurrentWindow();';

  ipc.on('plaintext', function(e, msg, email) {
    msg = msg.replace('&&&start&&&', '');
    e.sender.send('encrypted', gpg.encrypt(msg, email), email);
  });

  return script;
};

jsb.init(pkg);
