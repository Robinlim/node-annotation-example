var qs = require('querystring'),
    fs = require('fs');
/*@Controller*/
module.exports = {
    /*@RequestMapping("/simple")*/
    simple: function(req, res) {
        res.end("reach");
    },
    /*@RequestMapping('/urlParam/{name}')*/
    urlParam: function(name, req, res) {
        res.end('reach ' + name);
    },
    /*@RequestMapping({url:"^\\\/re[g]?$", useExp:true})*/
    reg: function(req, res){
        res.end("reach");
    },
    /*@RequestMapping(["/regParam/{code=00[1-9]*ab}"])*/
    regParam: function(code, req, res){
        res.end(code);
    },
    /*@RequestMapping(["/multiReg/v-{code=00[1-9]*ab}-t-{type=[A-Z]+0}"])*/
    multiRegParam: function(code, type, req, res){
        res.end(code + '-' + type);
    },
    /*@RequestMapping({url: "/post", method: "post"})*/
    post: function(req, res, reqData) {
        res.end('reach');
    },
    /*@RequestMapping("/error/code")*/
    errorWithCode: function(req, res){
        fs.readFile('./NotExist')
    },
    /*@RequestMapping("/error/message")*/
    errorWithMessage: function(req, res){
        throw new Error('EWRONGPARAM');
    },

};
