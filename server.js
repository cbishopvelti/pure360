var express = require('express');
var server = express();

server.use('/', express.static(__dirname + "/target"));

server.use(require('connect-livereload')());

server.listen(3002);

