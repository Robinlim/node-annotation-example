/**
* @Author: robin
* @Date:   2016-07-08 16:48:41
* @Email:  robinlim9@aliyun.com
* @Last modified by:   robin
* @Last modified time: 2016-07-12 11:25:52
*/

var path = require('path');
var expect = require('chai').expect;
var nodeAnnotation = require('node-annotation');

var _console = {}, out = "";

function replaceConsole(writer) {
    ['log','debug','info'].forEach(function (item) {
        _console[item] = console[item];
        console[item] = writer;
    });
}

function backupConsole(){
    ['log','debug','info'].forEach(function (item) {
        console[item] = _console[item];
    });
}

describe('AOP', function() {
    before(function (done) {
        nodeAnnotation.start(path.join(__dirname, '../example/AOP'), function() {
            done();
        });
    });
    describe('aop', function () {
        it('general test should work', function (done) {
            var knight = require('../example/AOP/Knight');
            replaceConsole(function(){
                out += ([]).join.call(arguments, ' ') + '\n';
            });
            knight.hit();
            setTimeout(function(){
                backupConsole();
                var correct = "Poet say: knight will hit!!\n"
                    +"Poet say: around before2\n"
                    +"Poet say: around before\n"
                    +"knight hitting!!\n"
                    +"knight sync die!\n"
                    +"Poet say: knight die error!!\n"
                    +"result\n"
                    +"Poet say: around leave\n"
                    +"result\n"
                    +"Poet say: around leave2\n"
                    +"Poet say: knight hitted!!\n"
                    +"knight ready to flight, wait for 1000 ms\n"
                    +"knight async die!\n"
                    +"Poet say: knight die error!!\n"
                    +"Poet say: knight will flight!!\n"
                    +"knight flight\n";
                expect(out).to.equal(correct);
                done();
            },3000);
        });
    });
});
