'use strict';

import {inspect} from './debug';

let masterData = [];

export function setMasterData(data) {
	masterData = data;
}

export function getMasterData() {
	return masterData;
}


//module.exports.setMasterData = setMasterData;
//module.exports.getMasterData = getMasterData;
