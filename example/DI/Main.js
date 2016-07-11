var nodeAnnotation = require('node-annotation');
nodeAnnotation.start(__dirname, function() {
    var promise = nodeAnnotation.ApplicationContext.getBean('Autowired');
    promise.then(function(proxy) {
        proxy.instance().show();
    });
});
