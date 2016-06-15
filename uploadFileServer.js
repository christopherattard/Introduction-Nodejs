var fs = require("fs");
var http = require("http");

http.createServer(function(request, response) {
    var newFile = fs.createWriteStream("419MB-video.mp4");
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;

    request.pipe(newFile);

    request.on('data', function(chunk) {
        uploadedBytes += chunk.length;
        var progress = (uploadedBytes / fileBytes) * 100;
        response.write("progress: " +parseInt(progress, 10) + "%\n");
    });

    request.on('end', function() {
        response.end('File upload complete');
    });

}).listen(8080);