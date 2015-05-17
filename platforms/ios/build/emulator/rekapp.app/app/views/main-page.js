'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _dataObservable = require('data/observable');

//import {ObservableArray} from 'data/observable-array';

var _sharedUtilsDataStore = require('./../shared/utils/dataStore');

var _sharedUtilsDebug = require('./../shared/utils/debug');

var _uiFrame = require('ui/frame');

var frameModule = _interopRequireWildcard(_uiFrame);

var _page = undefined;
var _sections = new _dataObservable.Observable();
var _typeNames = ['drugs', 'advice'];

function loaded(args) {
	_page = args.object;
	_page.bindingContext = _sections;
	_sections.set('selectedIndex', 1);
	//_sections.selectedIndex = 1;

	console.log('=== loaded');

	var initApp = require('./../shared/utils/appInit');
	initApp.init().then(function () {
		console.log('=== initApp finished');
		var newSections = (0, _sharedUtilsDataStore.getMasterData)().filter(function (b) {
			return b[_typeNames[_sections.selectedIndex]] === true;
		}).map(function (chapter) {
			return { name: chapter.name, id: chapter.id };
		})
		//.map(chapter => ({name: chapter.name, id: chapter.id})
		.sort();
		_sections.set('sections', newSections);
	})['catch'](function (e) {
		console.dir(e);
	});
}
exports.loaded = loaded;

_sections.on(_dataObservable.Observable.propertyChangeEvent, function (propertyChangeData) {
	console.log('_sections property ' + propertyChangeData.propertyName + ' has been changed and the new value is: ' + propertyChangeData.value);
	if (propertyChangeData.propertyName === 'selectedIndex') {
		var newSections = (0, _sharedUtilsDataStore.getMasterData)().filter(function (b) {
			return b[_typeNames[propertyChangeData.value]] === true;
		}).map(function (chapter) {
			return { name: chapter.name, id: chapter.id };
		}).sort();
		_sections.set('sections', newSections);
	}
});

//frameModule.topmost().navigate('views/menu-sections');
//frameModule.topmost().navigate('views/dummy2');

function menuItemTap(args) {
	console.log('Tapping!');
	var navigationEntry = {
		moduleName: 'views/menu-chapters',
		context: {
			pathId: args.view.bindingContext.id,
			selectedIndex: _sections.selectedIndex
		}
	};
	var topmost = frameModule.topmost();
	topmost.navigate(navigationEntry);
}
exports.menuItemTap = menuItemTap;