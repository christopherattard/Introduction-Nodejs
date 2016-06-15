
var fs = require("fs");
var http = require("http");
var boundaryKey = Math.random().toString(16); // random string

var options = {
  host: 'localhost',
  path: '/',  
  port: '8080',  
  method: 'POST'
};

var callback = function(response) {

    request.setHeader('Content-Type', 'multipart/form-data; boundary="'+boundaryKey+'"');
    // the header for the one and only part (need to use CRLF here)
    request.write( 
    '--' + boundaryKey + '\r\n'
    // use your file's mime type here, if known
    + 'Content-Type: application/octet-stream\r\n'
    + 'Content-Length: 21061\r\n' //+Buffer.byteLength(post_data) \r\n' 
    // "name" is the name of the form field
    // "filename" is the name of the original file
    + 'Content-Disposition: form-data; name="readme"; filename="readme.md"\r\n'
    + 'Content-Transfer-Encoding: binary\r\n\r\n' 
    );
    fs.createReadStream('./readme.md', { bufferSize: 4 * 1024 })
    .on('end', function() {
        // mark the end of the one and only part
        request.end('\r\n--' + boundaryKey + '--'); 
    })
    // set "end" to false in the options so .end() isn't called on the request
    .pipe(request, { end: false }) // maybe write directly to the socket here?
}

var req = http.request(options, function(response));


req.end();