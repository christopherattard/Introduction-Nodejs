var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();

logger.on('error', function(message){
    console.log("ERR: " + message);
});

logger.on('warning', function(){
    console.log("Just a warning");
});

logger.emit('error', "Spilled Milk");
logger.emit('warning');