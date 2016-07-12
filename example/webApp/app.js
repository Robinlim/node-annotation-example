/**
* @Author: robin
* @Date:   2016-07-08 16:48:41
* @Email:  robinlim9@aliyun.com
* @Last modified by:   robin
* @Last modified time: 2016-07-12 11:24:57
*/

/**
 * Module dependencies.
 */
var express = require('express'),
    Path = require('path'),
    domain = require('domain'),
    favicon = require('serve-favicon')
    nodeAnnotation = require('node-annotation');

var cwd = process.cwd();

nodeAnnotation.setLogger(true, 'info', function(str, level) {
    console.log('[NodeAnnotation]', str);
});
nodeAnnotation.configurePath(Path.join(cwd, 'example', 'webApp', 'resource'));
nodeAnnotation.start([__dirname, Path.join(cwd, 'node_modules', 'node-annotation-extend', 'src')], function() {
    var app = module.exports = express.createServer();

    // Configuration
    app.configure(function() {
        app.set('views', Path.join(__dirname, '/views'));
        app.set('view engine', 'jade');
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(favicon(__dirname + '/favicon.ico'));
        app.use(express.static(__dirname + '/public'));
    });

    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
    nodeAnnotation.app(app);
    app.listen(process.argv[2]||3000, function() {
        console.log('Express server listening on port %d in %s mode', app.address().port, app.settings.env);
        process.send && process.send('ready');
    });
});
