/*@Controller*/
module.exports = {
	/*@RequestMapping(["/{{= path }}/{{= controller }}"])*/
	{{= controller }}: function(req, res) {
		res.end("{{= path }}/{{= controller }}");
	}
}