/*@Controller*/
module.exports = {
	/*@RequestMapping(["/{{= path }}/a"])*/
	a: function(req, res) {
		res.end("{{= path }}/a");
	},
	/*@RequestMapping(["/{{= path }}/b"])*/
	b: function(req, res) {
		res.end("{{= path }}/b");
	},
	/*@RequestMapping(["/{{= path }}/c"])*/
	c: function(req, res) {
		res.end("{{= path }}/c");
	},
	/*@RequestMapping(["/{{= path }}/d"])*/
	d: function(req, res) {
		res.end("{{= path }}/d");
	},
	/*@RequestMapping(["/{{= path }}/e"])*/
	e: function(req, res) {
		res.end("{{= path }}/e");
	},
	/*@RequestMapping(["/{{= path }}/f"])*/
	f: function(req, res) {
		res.end("{{= path }}/f");
	},
	/*@RequestMapping(["/{{= path }}/g"])*/
	g: function(req, res) {
		res.end("{{= path }}/g");
	},
	/*@RequestMapping(["/{{= path }}/h"])*/
	h: function(req, res) {
		res.end("{{= path }}/h");
	},
	/*@RequestMapping(["/{{= path }}/i"])*/
	i: function(req, res) {
		res.end("{{= path }}/i");
	},
	/*@RequestMapping(["/{{= path }}/j"])*/
	j: function(req, res) {
		res.end("{{= path }}/j");
	}
}