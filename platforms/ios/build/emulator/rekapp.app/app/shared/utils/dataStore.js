'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.setMasterData = setMasterData;
exports.getMasterData = getMasterData;

var _debug = require('./debug');

var masterData = [];

function setMasterData(data) {
	masterData = data;
}

function getMasterData() {
	return masterData;
}

//module.exports.setMasterData = setMasterData;
//module.exports.getMasterData = getMasterData;