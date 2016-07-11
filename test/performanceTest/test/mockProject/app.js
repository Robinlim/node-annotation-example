//prepare enviroment
var nodeAnnotation = require('../../bin/node-annotation');
var express = require('express');

var fs = require('fs');
var Path = require('path');


nodeAnnotation.start([Path.join(__dirname, 'src')], function(){
	var app = express();
	nodeAnnotation.app(app);
	var server = app.listen('9999', function() {
        console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
    });
});