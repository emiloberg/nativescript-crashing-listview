import {inspect} from './../shared/utils/debug';
import {Observable} from 'data/observable'
import {getMasterData} from './../shared/utils/dataStore';

let page;
let chapters = new Observable();
const typeNames = ['drugs', 'advice'];

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

chapters.on(Observable.propertyChangeEvent, function(propertyChangeData) {
	console.log('_sections property ' + propertyChangeData.propertyName + " has been changed and the new value is: " + propertyChangeData.value);
	if (propertyChangeData.propertyName === 'selectedIndex') {

		let newChapters = getMasterData()
			.filter(section => (section.id === chapters.get('pathId')));

		if (newChapters.length === 1) {
			newChapters = newChapters[0].chapters
				.filter(b => b[typeNames[chapters.get('selectedIndex')]] === true)
				.map(section => ({name: section.name, id: section.id}))
				.sort();
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
