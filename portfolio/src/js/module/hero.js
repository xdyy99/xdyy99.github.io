export default function hero() {
	const hero = document.querySelector('.heroJS');
	if (hero) {
		let items = hero.querySelectorAll('.heroItem');

		const slide = {
			current: 0,
			acceleration: 0,
			direction: -1,
			speed: window.innerWidth / (60 * 4),
			pos: 0,
		};

		function slider() {
			slide.acceleration = slide.current - window.pageYOffset;

			if (slide.acceleration < 0) {
				slide.direction = -1;
			}
			if (slide.acceleration > 0) {
				slide.direction = 1;
			}

			slide.current -= slide.acceleration * 0.1;

			slide.pos += slide.speed * slide.direction + slide.acceleration * 0.1;

			hero.style.transform = ` translateY(-50%) skew(${
				slide.acceleration * 0.05
			}deg)`;

			items.forEach((item, i) => {
				if (slide.pos < -item.offsetWidth) slide.pos = 0;
				if (slide.pos > 0) slide.pos = -item.offsetWidth;

				item.style.transform = `translateX(${slide.pos}px)`;
			});

			const animate = requestAnimationFrame(slider);
		}
		slider();
	}
}
