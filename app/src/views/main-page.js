import {Observable} from 'data/observable'
//import {ObservableArray} from 'data/observable-array';

import {getMasterData} from './../shared/utils/dataStore';
import {inspect} from './../shared/utils/debug';

import * as frameModule from 'ui/frame';

let _page;
let _sections = new Observable();
const _typeNames = ['drugs', 'advice'];

function loaded(args) {
    _page = args.object;
	_page.bindingContext = _sections;
	_sections.set('selectedIndex', 1);
	//_sections.selectedIndex = 1;

	console.log('=== loaded');


	var initApp = require('./../shared/utils/appInit');
    initApp.init()
        .then(function () {
			console.log('=== initApp finished');
			let newSections = getMasterData()
				.filter(b => b[_typeNames[_sections.selectedIndex]] === true)
				.map(chapter => ({ name: chapter.name, id: chapter.id }))
				//.map(chapter => ({name: chapter.name, id: chapter.id})
				.sort();
			_sections.set('sections', newSections)
        })
        .catch(function (e) {
            console.dir(e);
        });
}
exports.loaded = loaded;



_sections.on(Observable.propertyChangeEvent, function(propertyChangeData) {
	console.log('_sections property ' + propertyChangeData.propertyName + " has been changed and the new value is: " + propertyChangeData.value);
	if (propertyChangeData.propertyName === 'selectedIndex') {
		let newSections = getMasterData()
			.filter(b => b[_typeNames[propertyChangeData.value]] === true)
			.map(chapter => ({ name: chapter.name, id: chapter.id }))
			.sort();
		_sections.set('sections', newSections)
	}
});



//frameModule.topmost().navigate('views/menu-sections');
//frameModule.topmost().navigate('views/dummy2');

function menuItemTap(args) {
	console.log('Tapping!');
	let navigationEntry = {
		moduleName: 'views/menu-chapters',
		context: {
			pathId: args.view.bindingContext.id,
			selectedIndex: _sections.selectedIndex
		}
	};
	let topmost = frameModule.topmost();
	topmost.navigate(navigationEntry);
}
exports.menuItemTap = menuItemTap;
