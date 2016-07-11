'use strict';
/*@AutoLoad*/
module.exports = require('node-annotation').Annotation.extend({
    /**
     * business realization
     * @return
     */
    execute: function() {
        //注解业务实现
    },
    /**
     * compile the model
     * @param  {[Model]} model [annotation data]
     * @return
     */
    compile: function(model) {
        //处理注解模型参数，返回需要的数据
    }
}, {
    name: 'AnnotationName'
});
