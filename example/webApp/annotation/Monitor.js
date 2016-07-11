/*@AutoLoad*/
var nodeAnnotation = require('node-annotation');

module.exports = nodeAnnotation.Annotation.extend({
    /**
     *  the annotation affect
     * @return {[type]} [description]
     */
    execute: function() {
        var model = this.model;
        model.exports().addMethodInterceptor(model.vo(), nodeAnnotation.PROXYCYCLE.BEFORE, function(){
            console.info('monitor before');
        });
    },
    /**
     * compile the model
     * @param  {[Model]} model [annotation data]
     * @return {[type]} [description]
     */
    compile: function(model) {
        model.exports();
    }
}, {
    //annotation name
    name: 'Monitor'
});
