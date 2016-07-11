/*@RequestMapping(["/<%= path %>"])*/
<%= path %>: function(req, res) {
	res.send("<%= path %>");
}
