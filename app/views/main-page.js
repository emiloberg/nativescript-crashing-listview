'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _dataObservable = require('data/observable');

var _sharedUtilsDataStore = require('./../shared/utils/dataStore');

var _sharedUtilsDebug = require('./../shared/utils/debug');

var _uiFrame = require('ui/frame');

var frameModule = _interopRequireWildcard(_uiFrame);

var page = undefined;
var sections = new _dataObservable.Observable();
var typeNames = ['drugs', 'advice'];

function loaded(args) {
	page = args.object;
	page.bindingContext = sections;
	sections.set('selectedIndex', 1);

	var newSections = (0, _sharedUtilsDataStore.getMasterData)().filter(function (b) {
		return b[typeNames[sections.selectedIndex]] === true;
	}).map(function (chapter) {
		return { name: chapter.name, id: chapter.id };
	}).sort();
	sections.set('sections', newSections);
}
exports.loaded = loaded;

sections.on(_dataObservable.Observable.propertyChangeEvent, function (propertyChangeData) {
	console.log('sections property ' + propertyChangeData.propertyName + ' has been changed and the new value is: ' + propertyChangeData.value);
	if (propertyChangeData.propertyName === 'selectedIndex') {
		var newSections = (0, _sharedUtilsDataStore.getMasterData)().filter(function (b) {
			return b[typeNames[propertyChangeData.value]] === true;
		}).map(function (chapter) {
			return { name: chapter.name, id: chapter.id };
		}).sort();
		sections.set('sections', newSections);
	}
});

function menuItemTap(args) {
	var navigationEntry = {
		moduleName: 'views/menu-chapters',
		context: {
			pathId: args.view.bindingContext.id,
			selectedIndex: sections.selectedIndex
		}
	};
	var topmost = frameModule.topmost();
	topmost.navigate(navigationEntry);
}
exports.menuItemTap = menuItemTap;