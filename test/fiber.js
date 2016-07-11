var path = require('path');
var expect = require('chai').expect;

describe('fiber(async)', function() {

    describe('async genral', function () {
        it('async should works', function (done) {
            var nodeAnnotation = require('node-annotation');
            nodeAnnotation.start(path.join(__dirname, '../example/fiber'), function() {
                var main = require('../example/fiber/use.js');
                main.fin(10).then(function(val){
                    expect(val).to.equal('Reach text.txt');
                    done();
                }, function(err){
                    console.error(err, err.stack);
                    done();
                })
            });
        });
    });
});