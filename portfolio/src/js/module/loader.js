export default function loader() {
	const loader = document.querySelector('.loaderJS');
	const wrapper = document.querySelector('#smooth-wrapper');

	let END = 100;
	let loade = 100;

	const transform = {
		S: 35,
		X: -159,
		Y: -200,
	};

	if (loader && wrapper) {
		let progress = 0;
		let percent = 1;

		const speed = 0.02;

		function loading() {
			progress += (END - progress) * speed;
			if (progress <= 99) {
				loader.style.backgroundPositionX = 100 - progress + '%';
				const loadingAnimate = requestAnimationFrame(loading);
			} else {
				loader.classList.add('white');
				intro();
			}
		}
		loading();

		function intro() {
			percent -= percent * speed * 3;
			let _S = 1 + transform.S * percent;
			let _X = transform.X * percent;
			let _Y = transform.Y * percent;
			if (percent >= 0.00001) {
				wrapper.style.transform = `translate( ${_X}vw, ${_Y}vh) scale(${_S}) `;
				const introAnimate = requestAnimationFrame(intro);
			} else {
				try {
					smoothScroll();
				} catch {
					console.error('Smooth scroll is not working!');
				}
				document.querySelector('body').classList.add('enter');
				wrapper.style.transform = `none`;
			}
		}
	}
}
