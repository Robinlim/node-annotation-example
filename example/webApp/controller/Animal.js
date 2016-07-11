var qs = require('querystring');
/*@Controller*/
module.exports = {
    /*@RequestMapping(["/animal"])*/
    user: function(req, res) {
        res.render('index', {
            title: 'Animal Express person'
        });
        res.end("");
    },
    /*@RequestMapping([{url: "/animals", method: "post"},{url: "/allAnimals"}])*/
    users: function(req, res, reqData) {
        res.end('users here ' + JSON.stringify(reqData));
    },
    /*@RequestMapping('/animal/{name}')*/
    robin: function(name, req, res) {
        res.end(name + ' here');
    },
    /*@RequestMapping('/animal/error/sync')*/
    errorFunSync: function(req, res){
        throw new Error('syncError')
    },
    /*@RequestMapping('/animal/error/async')*/
    errorFunAsync: function(req, res){
        setTimeout(function(){
            throw new Error('asyncError')
        }, 10)
    },
    /*@ExceptionHandler*/
    fail: function(err, req, res){
        res.end('animal '+ err.message);
    }
};
