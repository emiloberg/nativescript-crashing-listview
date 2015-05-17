'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Handlebars = require('../../node_modules/handlebars');

var HtmlRenderer = (function () {
	function HtmlRenderer() {
		_classCallCheck(this, HtmlRenderer);

		this.templates = {};
	}

	_createClass(HtmlRenderer, [{
		key: 'registerTemplate',
		value: function registerTemplate(name, templateContent) {
			this.templates[name] = Handlebars.compile(templateContent);
		}
	}, {
		key: 'processTemplate',
		value: function processTemplate(templateName, templateContext) {
			var template = this.templates[templateName];
			if (template === undefined) {
				throw Error('No such Template registered');
			}
			return template(templateContext);
		}
	}]);

	return HtmlRenderer;
})();

exports['default'] = HtmlRenderer;
module.exports = exports['default'];