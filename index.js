var express = require('express')
var app = express()

var PORT = process.env.PORT || 3000;

app.get('/api/whoami', function(req, res){
	console.log(req.ip)
})


app.listen(PORT, function(){
	console.log('Node app is running on port', app.get('port'))
})