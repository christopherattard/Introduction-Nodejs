var hello = function() {
    console.log("Custom Hello");
}

var hello2 = function() {
    console.log("Custom Hello2");
}

exports.hello = hello;
exports.hello2 = hello2;