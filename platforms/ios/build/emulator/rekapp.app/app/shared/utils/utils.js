'use strict';

function makeUrlSafe(str /*, dontURIEncode*/) {
	var ret = str || '';
	ret = ret.replace(/ /g, '_');
	ret = removeDiacritics(ret);

	//if (dontURIEncode === false) {
	//	ret = encodeURIComponent(ret);
	//}

	return ret;
}

var defaultDiacriticsRemovalap = [{ 'base': 'A', 'letters': 'AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ' }, { 'base': 'AA', 'letters': 'Ꜳ' }, { 'base': 'AE', 'letters': 'ÆǼǢ' }, { 'base': 'AO', 'letters': 'Ꜵ' }, { 'base': 'AU', 'letters': 'Ꜷ' }, { 'base': 'AV', 'letters': 'ꜸꜺ' }, { 'base': 'AY', 'letters': 'Ꜽ' }, { 'base': 'B', 'letters': 'BⒷＢḂḄḆɃƂƁ' }, { 'base': 'C', 'letters': 'CⒸＣĆĈĊČÇḈƇȻꜾ' }, { 'base': 'D', 'letters': 'DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ' }, { 'base': 'DZ', 'letters': 'ǱǄ' }, { 'base': 'Dz', 'letters': 'ǲǅ' }, { 'base': 'E', 'letters': 'EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ' }, { 'base': 'F', 'letters': 'FⒻＦḞƑꝻ' }, { 'base': 'G', 'letters': 'GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ' }, { 'base': 'H', 'letters': 'HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ' }, { 'base': 'I', 'letters': 'IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ' }, { 'base': 'J', 'letters': 'JⒿＪĴɈ' }, { 'base': 'K', 'letters': 'KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ' }, { 'base': 'L', 'letters': 'LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ' }, { 'base': 'LJ', 'letters': 'Ǉ' }, { 'base': 'Lj', 'letters': 'ǈ' }, { 'base': 'M', 'letters': 'MⓂＭḾṀṂⱮƜ' }, { 'base': 'N', 'letters': 'NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ' }, { 'base': 'NJ', 'letters': 'Ǌ' }, { 'base': 'Nj', 'letters': 'ǋ' }, { 'base': 'O', 'letters': 'OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ' }, { 'base': 'OI', 'letters': 'Ƣ' }, { 'base': 'OO', 'letters': 'Ꝏ' }, { 'base': 'OU', 'letters': 'Ȣ' }, { 'base': 'OE', 'letters': 'Œ' }, { 'base': 'oe', 'letters': 'œ' }, { 'base': 'P', 'letters': 'PⓅＰṔṖƤⱣꝐꝒꝔ' }, { 'base': 'Q', 'letters': 'QⓆＱꝖꝘɊ' }, { 'base': 'R', 'letters': 'RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ' }, { 'base': 'S', 'letters': 'SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ' }, { 'base': 'T', 'letters': 'TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ' }, { 'base': 'TZ', 'letters': 'Ꜩ' }, { 'base': 'U', 'letters': 'UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ' }, { 'base': 'V', 'letters': 'VⓋＶṼṾƲꝞɅ' }, { 'base': 'VY', 'letters': 'Ꝡ' }, { 'base': 'W', 'letters': 'WⓌＷẀẂŴẆẄẈⱲ' }, { 'base': 'X', 'letters': 'XⓍＸẊẌ' }, { 'base': 'Y', 'letters': 'YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ' }, { 'base': 'Z', 'letters': 'ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ' }, { 'base': 'a', 'letters': 'aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ' }, { 'base': 'aa', 'letters': 'ꜳ' }, { 'base': 'ae', 'letters': 'æǽǣ' }, { 'base': 'ao', 'letters': 'ꜵ' }, { 'base': 'au', 'letters': 'ꜷ' }, { 'base': 'av', 'letters': 'ꜹꜻ' }, { 'base': 'ay', 'letters': 'ꜽ' }, { 'base': 'b', 'letters': 'bⓑｂḃḅḇƀƃɓ' }, { 'base': 'c', 'letters': 'cⓒｃćĉċčçḉƈȼꜿↄ' }, { 'base': 'd', 'letters': 'dⓓｄḋďḍḑḓḏđƌɖɗꝺ' }, { 'base': 'dz', 'letters': 'ǳǆ' }, { 'base': 'e', 'letters': 'eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ' }, { 'base': 'f', 'letters': 'fⓕｆḟƒꝼ' }, { 'base': 'g', 'letters': 'gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ' }, { 'base': 'h', 'letters': 'hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ' }, { 'base': 'hv', 'letters': 'ƕ' }, { 'base': 'i', 'letters': 'iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı' }, { 'base': 'j', 'letters': 'jⓙｊĵǰɉ' }, { 'base': 'k', 'letters': 'kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ' }, { 'base': 'l', 'letters': 'lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ' }, { 'base': 'lj', 'letters': 'ǉ' }, { 'base': 'm', 'letters': 'mⓜｍḿṁṃɱɯ' }, { 'base': 'n', 'letters': 'nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ' }, { 'base': 'nj', 'letters': 'ǌ' }, { 'base': 'o', 'letters': 'oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ' }, { 'base': 'oi', 'letters': 'ƣ' }, { 'base': 'ou', 'letters': 'ȣ' }, { 'base': 'oo', 'letters': 'ꝏ' }, { 'base': 'p', 'letters': 'pⓟｐṕṗƥᵽꝑꝓꝕ' }, { 'base': 'q', 'letters': 'qⓠｑɋꝗꝙ' }, { 'base': 'r', 'letters': 'rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ' }, { 'base': 's', 'letters': 'sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ' }, { 'base': 't', 'letters': 'tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ' }, { 'base': 'tz', 'letters': 'ꜩ' }, { 'base': 'u', 'letters': 'uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ' }, { 'base': 'v', 'letters': 'vⓥｖṽṿʋꝟʌ' }, { 'base': 'vy', 'letters': 'ꝡ' }, { 'base': 'w', 'letters': 'wⓦｗẁẃŵẇẅẘẉⱳ' }, { 'base': 'x', 'letters': 'xⓧｘẋẍ' }, { 'base': 'y', 'letters': 'yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ' }, { 'base': 'z', 'letters': 'zⓩｚźẑżžẓẕƶȥɀⱬꝣ' }];

var diacriticsMap = {};
for (var i = 0; i < defaultDiacriticsRemovalap.length; ++i) {
	for (var j = 0; j < defaultDiacriticsRemovalap[i].letters.length; ++j) {
		diacriticsMap[defaultDiacriticsRemovalap[i].letters[j]] = defaultDiacriticsRemovalap[i].base;
	}
}

function removeDiacritics(str) {
	return str.replace(/[^\u0000-\u007E]/g, function (a) {
		return diacriticsMap[a] || a;
	});
}

module.exports.makeUrlSafe = makeUrlSafe;