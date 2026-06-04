var http = require('http')

var a = 1000
var b = 2000000
http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'})
	res.write("Hello world")
	res.write("<br/><b>A value is</b>"+a)
	res.write("<br/><b>A value is</b>"+a)
	res.end("<br/>Bye")
}).listen(3000)
console.log("Server started on http://127.0.0.1:3000")
