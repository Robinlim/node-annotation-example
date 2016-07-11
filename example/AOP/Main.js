var nodeAnnotation = require('node-annotation');
nodeAnnotation.start(__dirname, function() {
    var knight = require('./Knight');
    knight.hit();
});
