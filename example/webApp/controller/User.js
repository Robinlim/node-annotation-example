var qs = require('querystring');
/*@Controller*/
module.exports = {
    /*@Qmonitor("user")*/
    /*@QmonitorRRT("user")*/
    /*@RequestMapping(["/user", {url:"/home"}, "/"])*/
    user: function(req, res) {
        res.render('index', {
            title: 'Express person'
        });
        res.end('');
    },
    /*@RequestMapping([{url: "/users", method: "post"},{url: "/alluser"}])*/
    /*@Monitor*/
    users: function(req, res, reqData) {
        res.end('users here ' + JSON.stringify(reqData));
    },
    /*@RequestMapping([{url: "/api", method: "get"}])*/
    /*@ResponseBody*/
    api: function(req, res){
        res.end({test:true});
    },
    /*@RequestMapping("/user/{name}/{message}")*/
    robin: function(name, message, req, res) {
        res.end(name + ' say ' + message);
    },
    /*@Autowired("../service/UserService")*/
    userService: null,
    /*@RequestMapping("/dao")*/
    dao: function(req, res) {
        res.end(this.userService.userdao.getUsers());
    },
    /*@Configure("setting.json|appenders[0].type")*/
    settings: null,
    /*@RequestMapping("/config")*/
    configure: function(req, res){
        res.end(this.settings);
    }
};
