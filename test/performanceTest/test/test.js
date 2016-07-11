//prepare enviroment
var nodeAnnotation = require('../bin/node-annotation');
var express = require('express');

var fs = require('fs');
var Path = require('path');

var assert = require('assert');
var mockFs = require('mock-fs');
var sinon = require('sinon');

describe('nodeAnnotation', function() {
	before(function() {
		// TODO: mock Project here
		// var fs = mockFs.fs({
		// 	'mockProject': {
		// 		'controller': {
		// 			'controller1.js': '',
		// 			'controller2.js': ''
		// 		},
		// 		'service': {
		// 			'service1.js': '',
		// 			'service2.js': ''
		// 		}
		// 	}
		// });
	});
	// describe('start', function () {
	// 	it('should start recursive a dir', function (done) {
	// 		nodeAnnotation.start([Path.join(__dirname, 'mockProject')], function(){
	// 			done()
	// 		});
	// 	});
	// });
	describe('app', function () {
		it('should start a express app', function (done) {
			nodeAnnotation.start([Path.join(__dirname, 'mockProject')], function(){
				var app = express();
				nodeAnnotation.app(app);
				var server = app.listen('9999', function() {
			        console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
			    	done()
			    });
			});
		});
	});
});