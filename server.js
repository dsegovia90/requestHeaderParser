var express = require('express')
var app = express()

var PORT = process.env.PORT || 3000;

app.get('/api/whoami', function(req, res){
	var ip = req.ip
	ip = ip.replace(/::ffff:/, "")
	var lang = req.headers['accept-language'].split(",")[0]

	var os = req.headers['user-agent']
	os = os.match(/\(.*?\)/)[0]


	console.log(os)

	console.log(lang)

	console.log(ip)

	res.end(JSON.stringify({ipAdress: ip, language: lang, operatingSystem: os}))
})

app.listen(PORT, function(){
	console.log('Node app is running on port ' + PORT)
})