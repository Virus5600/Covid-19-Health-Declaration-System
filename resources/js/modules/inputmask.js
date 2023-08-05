window.$ = require('jquery');
window.Inputmask = require('inputmask');

import Inputmask from "inputmask";

$(document).ready(() => {
	$(`[data-mask]`).each((k, v) => {
		let obj = $(v);

		new Inputmask({
			mask: obj.attr("data-mask-format"),
			removeMaskOnSubmit: obj.attr("data-mask-retain-mask-onsubmit") == undefined ? true : !obj.attr("data-mask-retain-mask-onsubmit"),
			autoUnmask: obj.attr("data-mask-retain-mask-onsubmit") == undefined ? true : !obj.attr("data-mask-retain-mask-onsubmit"),
			clearMaskOnLostFocus: obj.attr("data-mask-retain-mask") == undefined ? true : obj.attr("data-mask-retain-mask")
		}).mask(v);

		obj.removeAttr("data-mask")
			.removeAttr("data-mask-format")
			.removeAttr("data-mask-retain-mask-onsubmit");
	});
});