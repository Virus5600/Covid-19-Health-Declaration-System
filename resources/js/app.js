// Setting user language
window.lang = (window.navigator.userLanguage || window.navigator.language);

// jQuery
window.$ = window.jQuery = window.jquery = require('jquery');

// jQuery UI
require('jquery-ui/dist/jquery-ui.min.js');

// popper.js
window.Popper = require('popper.js');

// Bootstrap 5
require('bootstrap/dist/js/bootstrap.bundle.min.js');
require('bootstrap-select/dist/js/bootstrap-select.min.js');

// Sweetalert 2
window.Swal = require('sweetalert2/dist/sweetalert2.all.min');

// Fontawesome 6
require('@fortawesome/fontawesome-free/js/solid.min.js');
require('@fortawesome/fontawesome-free/js/regular.min.js');
require('@fortawesome/fontawesome-free/js/brands.min.js');
require('@fortawesome/fontawesome-free/js/fontawesome.min.js');

// Chart.js
const Chart = window.Chart = require('chart.js/auto');