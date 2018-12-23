var http = require('http')

http.createServer(function(require, response){
    response.writeHead(200, {"Content-Type": "text/html;charset='utf-8"});
    response.write('你好 nodejs');
    response.end()
}).listen(8001);