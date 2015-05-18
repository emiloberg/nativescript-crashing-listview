import {Observable} from 'data/observable'

import {getMasterData} from './../shared/utils/dataStore';
import {inspect} from './../shared/utils/debug';

import * as frameModule from 'ui/frame';

let page;
let sections = new Observable();
const typeNames = ['drugs', 'advice'];

function loaded(args) {
    page = args.object;
	page.bindingContext = sections;
	sections.set('selectedIndex', 1);

	let newSections = getMasterData()
		.filter(b => b[typeNames[sections.selectedIndex]] === true)
		.map(chapter => ({ name: chapter.name, id: chapter.id }))
		.sort();
	sections.set('sections', newSections)

}
exports.loaded = loaded;

sections.on(Observable.propertyChangeEvent, function(propertyChangeData) {
	console.log('sections property ' + propertyChangeData.propertyName + " has been changed and the new value is: " + propertyChangeData.value);
	if (propertyChangeData.propertyName === 'selectedIndex') {
		let newSections = getMasterData()
			.filter(b => b[typeNames[propertyChangeData.value]] === true)
			.map(chapter => ({ name: chapter.name, id: chapter.id }))
			.sort();
		sections.set('sections', newSections)
	}
});

function menuItemTap(args) {
	let navigationEntry = {
		moduleName: 'views/menu-chapters',
		context: {
			pathId: args.view.bindingContext.id,
			selectedIndex: sections.selectedIndex
		}
	};
	let topmost = frameModule.topmost();
	topmost.navigate(navigationEntry);
}
exports.menuItemTap = menuItemTap;
