'use strict';

var _sharedUtilsDebug = require('./../shared/utils/debug');

var _dataObservable = require('data/observable');

var _sharedUtilsDataStore = require('./../shared/utils/dataStore');

var page = undefined;
var chapters = new _dataObservable.Observable();
var typeNames = ['drugs', 'advice'];

function loaded(args) {
	page = args.object;
	page.bindingContext = chapters;
	chapters.set('selectedIndex', 1);
	chapters.set('chapters', {});
	chapters.set('pathId', '');
}

function navigatedTo(args) {
	chapters.set('pathId', args.context.pathId);
	chapters.set('selectedIndex', args.context.selectedIndex);
}

chapters.on(_dataObservable.Observable.propertyChangeEvent, function (propertyChangeData) {
	console.log('_sections property ' + propertyChangeData.propertyName + ' has been changed and the new value is: ' + propertyChangeData.value);
	if (propertyChangeData.propertyName === 'selectedIndex') {

		var newChapters = (0, _sharedUtilsDataStore.getMasterData)().filter(function (section) {
			return section.id === chapters.get('pathId');
		});

		if (newChapters.length === 1) {
			newChapters = newChapters[0].chapters.filter(function (b) {
				return b[typeNames[chapters.get('selectedIndex')]] === true;
			}).map(function (section) {
				return { name: section.name, id: section.id };
			}).sort();
			console.log('SETTING CHAPTERS (potential crash on next line)');
			chapters.set('chapters', newChapters);
			console.log('DONE SETTING CHAPTERS');
		} else {
			console.log('...not exactly 1');
			//todo error handle if response is not exactly 1
		}
	}
});

module.exports.navigatedTo = navigatedTo;
module.exports.loaded = loaded;