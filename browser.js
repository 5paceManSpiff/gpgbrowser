var exec = require('child_process').exec;
var jsb = require('jsb');
var pkg = require('./package.json');

var execute = function(command, callback) {
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

jsb.onReady = function(win, ipc) {
  win.loadUrl('file://' + __dirname + '/index.html');
  return '';
};

jsb.onLoad = function(win, ipc) {
  var script = 'var win = require("remote").getCurrentWindow();';

  ipc.on('plaintext', function(e, msg, email) {
    msg = msg.replace('&&&start&&&', '');
    exec('echo "%msg" | gpg -ea -r "%email"'.replace('%msg', msg).replace('%email', email), function(error, stdout, stderr){
      console.log(error);
      console.log('stdout: ' + stdout.toString());
      console.log('stderr: ' + stderr.toString());
      if (stderr == '') {
        e.sender.send('encrypted', stdout, email);
      } else {
        e.sender.send('encrypted', 'error', email);
      }
    });
  });

  return script;
};

jsb.init(pkg);
