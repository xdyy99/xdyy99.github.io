export default function loader() {
	const loader = document.querySelector('.loaderJS');
	if (loader) {
		setTimeout(() => {
			loader.classList.add('enter');
		}, 1000);
		setTimeout(() => {
			document.querySelector('body').classList.add('welcome');
		}, 1500);

		const btns = document.querySelectorAll('a');
		btns.forEach((btn) => {
			if (btn.classList.contains('no-load')) return;
			if (btn.getAttribute('target') != null) return;
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				loader.classList.add('leave');
				setTimeout(() => {
					window.location.href = btn.href;
				}, 500);
			});
		});
	}
}
