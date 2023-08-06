window.$ = require("jquery");

$(document).ready(() => {
	const monthlyDeclarationChart = new Chart(target, {
		type: `line`,
		data: {
			labels: months,
			datasets: dataset,
		},
		options: {
			plugins: {
				title: {
					display: true,
					text: `Monthly Declarations`,
					font: {
						size: 15,
						weight: `normal`,
					}
				},
				legend: {
					display: true
				}
			},
			responsive: true,
			maintainsAspectRatio: false,
			onResize: (chart, size) => {
				let canvas = $(chart.canvas);
				let parent = canvas.parent();

				const newWidth = parent.width();
				const newHeight = (parent.width() * (6/10));

				canvas.css('width', newWidth)
					.css('height', newHeight);
				chart.resize(newWidth, newHeight);

				chart.update();
			}
		}
	});

	window.addEventListener('beforeprint', () => {
		monthlyDeclarationChart.resize();
	});

	window.addEventListener('afterprint', () => {
		monthlyDeclarationChart.resize();
	});

	document.querySelectorAll("[data-toRemove]").forEach(el => el.remove());
});