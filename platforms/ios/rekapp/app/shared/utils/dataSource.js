'use strict';

var _dataStore = require('./dataStore');

var debug = require('./debug');
var utils = require('./utils');

var RESOURCE_URLS = {
	drugs: {
		//url: 'http://local.dev:8080/api/jsonws/skinny-web.skinny/get-skinny-journal-articles/company-id/10155/group-name/Guest/ddm-structure-id/11571/locale/sv_SE',
		url: 'http://localhost:5656/drugs.json',
		isJson: true
	},
	advice: {
		//url: 'http://local.dev:8080/api/jsonws/skinny-web.skinny/get-skinny-journal-articles/company-id/10155/group-name/Guest/ddm-structure-id/12602/locale/sv_SE',
		url: 'http://localhost:5656/advice.json',
		isJson: true
	},
	hbsDrugs: {
		//url: 'http://local.dev:8080/reklistan-theme/handlebars/details-drugs.hbs'
		url: 'http://localhost:5656/details-drugs.hbs' }
};

function init() {
	var rekData = undefined;

	//TODO Read from file here

	if (!rekData) {
		return fetchDataFromServer();
	}
}

function fetchDataFromServer() {
	var http = require('http');

	return Promise.all(Object.keys(RESOURCE_URLS).map(function (name) {
		return http.request({ url: RESOURCE_URLS[name].url, method: 'GET' }).then(function (response) {

			if (response.statusCode < 200 || response.statusCode >= 300) {
				throw new Error('Could not load resource ' + name);
			}
			var resData = undefined;
			if (RESOURCE_URLS[name].isJson) {
				resData = response.content.toJSON();
			} else {
				resData = response.content.toString();
			}

			return {
				name: name,
				data: resData
			};
		});
	})).then(function (e) {

		// Convert response array to object
		var data = {
			drugs: {},
			advice: {},
			hbsDrugs: ''
		};
		e.forEach(function (response) {
			data[response.name] = response.data;
		});

		(0, _dataStore.setMasterData)(convertREKJsonToModelObj(data));
	})['catch'](function (e) {
		console.log('CATCHING');
		throw new Error(e);
	});
}

/**
 *
 /**
 * Takes Skinny JSON Response JSON and Convert to data model object.
 *
 * @param {object} data
 * @param {object} data.drugs
 * @param {object} data.advice
 *
 * @returns {object[]}
 */
function convertREKJsonToModelObj(data) {
	var dataOut = [];

	['drugs', 'advice'].forEach(function (type) {
		var chapterIndex = 0;
		var detailsIndex = 0;

		data[type].forEach(function (chapter) {

			// Add chapter or get array index of chapter if chapter already exists
			var curChapterIndex = dataOut.map(function (e) {
				return e.name;
			}).indexOf(chapter.title);
			if (curChapterIndex === -1) {
				dataOut.push({
					name: chapter.title,
					id: utils.makeUrlSafe(chapter.title),
					drugs: false,
					advice: false,
					chapters: []
				});
				chapterIndex = dataOut.length - 1;
			} else {
				chapterIndex = curChapterIndex;
			}

			// Add drug/advice to indicate details have drug/advice information.
			if (type === 'drugs') {
				dataOut[chapterIndex].drugs = true;
			} else if (type === 'advice') {
				dataOut[chapterIndex].advice = true;
			}

			chapter.fields.forEach(function (details) {
				// Add details or get array index of details if details already exists
				var curDetailsIndex = dataOut[chapterIndex].chapters.map(function (e) {
					return e.name;
				}).indexOf(details.value);
				if (curDetailsIndex === -1) {
					dataOut[chapterIndex].chapters.push({
						name: details.value,
						drugs: false,
						advice: false,
						id: utils.makeUrlSafe(chapter.title) + '/' + utils.makeUrlSafe(details.value)
					});
					detailsIndex = dataOut[chapterIndex].chapters.length - 1;
				} else {
					detailsIndex = curDetailsIndex;
				}

				// Add drug/advice to indicate details have drug/advice information.
				if (type === 'drugs') {
					dataOut[chapterIndex].chapters[detailsIndex].drugs = true;
				} else if (type === 'advice') {
					dataOut[chapterIndex].chapters[detailsIndex].advice = true;
				}
			});
		});
	});
	//debug.saveFile('masterdata.json', JSON.stringify(dataOut));
	return dataOut;
}

module.exports.init = init;