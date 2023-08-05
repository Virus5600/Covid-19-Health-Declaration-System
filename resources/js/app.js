// Setting user language
window.lang = (window.navigator.userLanguage || window.navigator.language);

// jQuery
window.$ = window.jQuery = window.jquery = require('jquery');

// jQuery UI
require('jquery-ui/dist/jquery-ui.min.js');

// popper.js
window.Popper = require('popper.js');

// Bootstrap 5
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');

// Sweetalert 2
window.Swal = require('sweetalert2/dist/sweetalert2.all.min');

// Fontawesome 6
require('@fortawesome/fontawesome-free/js/solid.min.js');
require('@fortawesome/fontawesome-free/js/regular.min.js');
require('@fortawesome/fontawesome-free/js/brands.min.js');
require('@fortawesome/fontawesome-free/js/fontawesome.min.js');

// Chart.js
const Chart = window.Chart = require('chart.js/auto');

$(document).ready(() => {
	// Bootstrap 5's Popover
	var bsPopCalled = 0;
	var bsPopSetter = setInterval(() => {
		if (!document.hidden) {
			$(`[data-bs-toggle=popover]:not([data-popover=true], i.fas, i.far, i.fa-solid, i.fa-regular)`).each((i, v) => {
				const obj = v;
				new bootstrap.Popover(obj);

				$(v).attr("data-popover", "true");
			});

			if (bsPopCalled++ >= 10)
				clearInterval(bsPopSetter);
		}
	}, 1000);
});