var path = require('path');
var nodeAnnotation = require('node-annotation');
nodeAnnotation.start(path.join(__dirname), function() {
    var main = require('./use.js');
    main.fin(3000).then(function(val){
        console.log(val);
    }, function(err){
        console.error(err, err.stack)
    })
});