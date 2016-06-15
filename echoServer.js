var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200);
    request.on("data", function(chunk) {
        console.log("Received: " +chunk.toString());
        response.write("ECHO: " +chunk.toString());
    });

    request.on("end", function() {
        response.end();
    });
}).listen(8080);
console.log("Listening on port 8080...");
