
'use strict';

module.exports = function(grunt) {

  grunt.template.addDelimiters('handlebars-like-delimiters', '{{', '}}');
  grunt.initConfig({
    
    template: {
      data : {
        files : {
          'test/mockProject/src/js/<%= path %>.js':['test/templates/<%= tplname %>.js.tpl'],
        },
        options : {
          data : {
            'path': '<%= path %>',
            'controller': 'a'
          },
          'delimiters': 'handlebars-like-delimiters'
        }
      }
    },

    clean: {
        folder: 'test/mockProject/src/js/'
    }

  });

  // Actually load this plugin's task(s).
  //grunt.loadTasks('tasks');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-template-file');
  // 

    function randomName(len){
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
        var maxPos = $chars.length;
        var name = '';
    　　for (var j = 0; j < len; j++) {
    　　　　name += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
        return name;
    } 

    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'}); 
    grunt.registerTask('mockController',
    'to mock one controller with its name',
    function(name){
        grunt.config.set('path',name);
        grunt.task.run('template');
        grunt.log.writeln('mock controller:'+name+' finish');
    });

    grunt.registerTask('mock',
    'to mock several controller file with amount in mockProject.src.js',
    function(amount,tplname){
        grunt.config.set('tplname',tplname||'controller');
    　　var len = 10;
        var i,j;
        for(i = 0; i < amount; i++){
            grunt.task.run('mockController:'+randomName(len));
        }
        grunt.log.writeln('all '+amount+' controller`s mock finish!'); 
    });

    grunt.registerTask('mockExpress',
      'to mock several controller in one file',
      function(amount,tplname){
        var target = 'test/mockProjectExpress/src/js/controller.js';
        var content = '';
        var template = grunt.file.read('test/templates/express.js.tpl');
        var head = 'var express = require(\'express\');\nvar router = express.Router();';
        var foot = '\nmodule.exports = router;';
        content += head;
        for(var i = 0 ; i<amount; i++){
          content += grunt.template.process(template,{
            data:{path:randomName(10)}
          });
        };
        content += foot;   
        grunt.file.write(target,content);
      });

    grunt.registerTask('mockAnno',
      'to mock several controller in one file',
      function(amount){
        var target = 'test/mockProjectAnno/src/js/controller.js';
        var content = '';
        var template = grunt.file.read('test/templates/anno.js.tpl');
        var head = '/*@Controller*/\nmodule.exports = {\n';
        var foot = '}';
        content += head;
        for(var i = 0 ; i<amount; i++){
          content += grunt.template.process(template,{
            data:{path:randomName(10)}
          });
        };
        content += foot;   
        grunt.file.write(target,content);
      });
    // By default, lint and run all tests.
    grunt.registerTask('default',['clean:folder','mockMultiController:10'])
};