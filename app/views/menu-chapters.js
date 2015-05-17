'use strict';

var _sharedUtilsDebug = require('./../shared/utils/debug');

var _dataObservable = require('data/observable');

var _sharedUtilsDataStore = require('./../shared/utils/dataStore');

var _page = undefined;
var _chapters = new _dataObservable.Observable();
var _typeNames = ['drugs', 'advice'];

function loaded(args) {
	console.log('=== menu-chapters.js loaded');
	_page = args.object;
	_page.bindingContext = _chapters;
	_chapters.set('selectedIndex', 1);
	_chapters.set('chapters', {});
	_chapters.set('pathId', '');
}

function navigatedTo(args) {
	console.log('=== menu-chapters.js navigatedTo');

	_chapters.set('pathId', args.context.pathId);
	_chapters.set('selectedIndex', args.context.selectedIndex);
	//
	//inspect(args.context.pathId);
	//inspect(args.context.selectedIndex);

	//var elTypeBar = page.getViewById('typeSegmentedBar');
	//var typeBarBindingOptions = {
	//	sourceProperty: 'subMenuSelectedIndex',
	//	targetProperty: 'selectedIndex',
	//	twoWay: true
	//};
	//elTypeBar.bind(typeBarBindingOptions, RekData.nav);

	//let apa = RekData.getSubmenu(args.context.pathId, args.context.selectedIndex);
	//
	//var grid = page.getViewById('gridlay');
	//
	//grid.bindingContext = apa;
	//
	//var elTypeSegmentedBar = page.getViewById('typeSegmentedBar');
	//
	//elTypeSegmentedBar.bindingContext = RekData.getSubmenuSelectedIndex();
}

_chapters.on(_dataObservable.Observable.propertyChangeEvent, function (propertyChangeData) {
	console.log('_sections property ' + propertyChangeData.propertyName + ' has been changed and the new value is: ' + propertyChangeData.value);
	if (propertyChangeData.propertyName === 'selectedIndex') {

		//inspect(_chapters.get('selectedIndex'));
		//inspect(_chapters.get('pathId'));

		var newChapters = (0, _sharedUtilsDataStore.getMasterData)().filter(function (section) {
			return section.id === _chapters.get('pathId');
		});

		if (newChapters.length === 1) {
			newChapters = newChapters[0].chapters.filter(function (b) {
				return b[_typeNames[_chapters.get('selectedIndex')]] === true;
			}).map(function (section) {
				return { name: section.name, id: section.id };
			}).sort();
			(0, _sharedUtilsDebug.inspect)(newChapters);
			_chapters.set('chapters', newChapters);
		} else {
			console.log('ERROR: NOT EXACTLY 1');
			//todo error handle if response is not exactly 1
		}

		//let newSections = getMasterData()
		//	.filter(b => b[_typeNames[propertyChangeData.value]] === true)
		//	.map(chapter => ({ name: chapter.name, id: chapter.id }))
		//	.sort();
		//_sections.set('sections', newSections)
	}
});

module.exports.navigatedTo = navigatedTo;
module.exports.loaded = loaded;