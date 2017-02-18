var express = require('express')
var app = express()

var PORT = process.env.PORT || 3000;

app.get('/api/whoami', function(req, res){
	var ip = req.ip
	var lang = req.headers['accept-language'].split(",")[0]

	console.log(lang)

	console.log(ip)

	res.end(JSON.stringify({ip: ip}))
})

app.listen(PORT, function(){
	console.log('Node app is running on port ' + PORT)
})