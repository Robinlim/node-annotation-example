var path = require('path');
var expect = require('chai').expect;
var nodeAnnotation = require('node-annotation');
describe('DI', function() {
    before(function (done) {
        nodeAnnotation.start(path.join(__dirname, '../example/DI'), function() {
            done();
        });
    });
    describe('main', function () {
        it('should require the Componet and reach it function', function () {
            var promise = nodeAnnotation.ApplicationContext.getBean('Autowired');
            return promise.then(function(proxy) {
                var result = proxy.instance().show();
                expect(result).to.equal('reach Component');
            });
        });
    });
});