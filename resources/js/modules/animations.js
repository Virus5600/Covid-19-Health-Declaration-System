const OBSERVER = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			let target = entry.target;

			target.classList.add(entry.target.dataset.inviewAnim);
			target.classList.add(`visible`);

			OBSERVER.unobserve(entry.target);
		}
	});
});

document.querySelectorAll(`[data-inview-anim]`).forEach(obj => {
	OBSERVER.observe(obj);
});