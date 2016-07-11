var nodeAnnotation = require('node-annotation'),
    Path = require('path'),
    Annotation = nodeAnnotation.Annotation;

nodeAnnotation.start([Path.join(__dirname, '..'), Path.join(process.cwd(), 'node_modules', 'node-annotation-extend')], function() {
    recursive(Annotation, 0);
});

function recursive(annotation, tabIndex) {
    annotation.traverseAnnotations(function(key, item) {
        console.info(space(tabIndex) + key);
        recursive(item, tabIndex+1);
    });
}
function space(count){
  var blank = "+++";
  for(var i = 0;i < count;i++){
      blank += "+++";
  }
  return blank;
}
