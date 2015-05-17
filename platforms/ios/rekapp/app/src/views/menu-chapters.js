import {inspect} from './../shared/utils/debug';
import {Observable} from 'data/observable'
import {getMasterData} from './../shared/utils/dataStore';

let _page;
let _chapters = new Observable();
const _typeNames = ['drugs', 'advice'];

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




_chapters.on(Observable.propertyChangeEvent, function(propertyChangeData) {
	console.log('_sections property ' + propertyChangeData.propertyName + " has been changed and the new value is: " + propertyChangeData.value);
	if (propertyChangeData.propertyName === 'selectedIndex') {

		//inspect(_chapters.get('selectedIndex'));
		//inspect(_chapters.get('pathId'));

		let newChapters = getMasterData()
			.filter(section => (section.id === _chapters.get('pathId')));

		if (newChapters.length === 1) {
			newChapters = newChapters[0].chapters
				.filter(b => b[_typeNames[_chapters.get('selectedIndex')]] === true)
				.map(section => ({name: section.name, id: section.id}))
				.sort();
			inspect(newChapters);
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
