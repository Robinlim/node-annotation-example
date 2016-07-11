//prepare enviroment
var path = require('path');
var http = require('http');
var childProcess = require('child_process');
var fetch = require('node-fetch');
var expect = require('chai').expect;


var port = 13572; 
var host = 'http://127.0.0.1:' + port;
var hideAppLog = true; // 是否隐藏app打印的log

var app;
describe('webApp', function() {
    before(function(done) {
        var webAppPath = path.join(__dirname,'../example/webApp/app');
        app = childProcess.fork(webAppPath,[port],{
            silent: hideAppLog
        });
        app.on('message', function(m){
            if( m == 'ready'){
                done();
            }
        });
    });
    describe('RequestMapping', function(){
        describe('simple request', function(){
            it('should responese "/simple" with "reach"', function(){
                var url = host + "/simple";
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal('reach');
                });
            });
        });
        describe('url with param',function(){
            it('should responese "/urlParam/myParam" with "reach myParam"', function(){
                var url = host + '/urlParam/myParam';
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal('reach myParam');
                });
            }); 
        });
        describe('route with RegExp match',function(){
            it('should responese "/reg" with "reach"', function(){
                var url = host + '/reg';
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal('reach');
                });
            }); 
        });
        describe('route with RegExp param',function(){
            it('should responese "/regParam/00123ab" with "00123ab"', function(){
                var url = host + '/regParam/00123ab';
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal('00123ab');
                });
            }); 
        });
        describe('route with multi RegExp param',function(){
            it('should responese "/multiReg/v-002ab-t-A0" with "002ab-A0"', function(){
                var url = host + '/multiReg/v-002ab-t-A0';
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal('002ab-A0');
                });
            }); 
        });
        describe('route with cetain method post',function(){
            it('should responese post "/post" with "reach"',function(){
                var url = host + '/post';
                return fetch(url,{
                    method: 'POST'
                }).then(function(res){
                    return res.text();
                }).then(function(text){
                    expect(text).to.equal('reach');
                })
            })
        });
    });
    describe('EeceptionHandler', function(){
        describe('inner controller sync exception', function(){
            it('should responese /animal/error/sync with "animal syncError"', function(){
                var url = host + '/animal/error/sync';
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal('animal syncError');
                });
            })
        });
        describe('inner controller async exception', function(){
            it('should responese /animal/error/async with "animal asyncError"', function(){
                var url = host + '/animal/error/async';
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal('animal asyncError');
                });
            })
        });
        describe('common handler - filter error with Code', function(){
            it('should responese /error/code with "reach"', function(){
                var url = host + '/error/code';
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal('reach');
                });
            })
        });
        describe('common handler - filter error defalut with message', function(){
            it('should responese /error/message with "wrong param"', function(){
                var url = host + '/error/message';
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal('wrong param');
                });
            })
        });
    });
    describe('ResponeseBody', function(){
        describe('jsonstringify the res object', function(){
            it('should responese /api with "{\"test\":true}"', function(){
                var url = host + '/api';
                return fetch(url)
                .then(function(res) {
                    return res.text();
                }).then(function(text) {
                    expect(text).to.equal("{\"test\":true}");
                });
            })
        })
    })
    after(function(){
         app.kill();
    });
});