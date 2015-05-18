'use strict';
Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.inspect = inspect;
var eyes = require('./../../thirdparty/eyes');

function inspect(something) {
	console.log(eyes.inspect(something));
}