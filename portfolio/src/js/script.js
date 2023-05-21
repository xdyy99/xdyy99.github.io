//===== IMPORT MODULES =====//
import webgl from './module/webgl.js';
//===== EXECUTE =====//

window.addEventListener('load', () => {
	try {
		hero();
	} catch {
		console.error('Hero is not working!');
	}
	webgl();
	try {
	} catch {
		console.error('Webgl is not working!');
	}
	try {
		hover();
	} catch {
		console.error('Hover is not working!');
	}
	try {
		clock();
	} catch {
		console.error('Clock is not working!');
	}
	try {
		loader();
	} catch {
		console.error('Loader is not working!');
	}
});

function hero() {
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

// function webgl() {
// 	console.log(THREE);
// }

function hover() {
	const position = {
		X: window.innerWidth / 2,
		Y: window.innerHeight / 2,
		Z: 0,
	};
	const cursor = {
		X: window.innerWidth / 2,
		Y: window.innerHeight / 2,
	};
	const speed = 0.1;

	const links = document.querySelectorAll('.cursorLink');
	const sections = document.querySelectorAll('.sectionLink');

	links.forEach((link, i) => {
		let letters = link.querySelectorAll('div');
		link.addEventListener('mouseenter', () => {
			randomLetter();
		});
		link.addEventListener('mouseleave', () => {
			resetLetter();
		});
		link.addEventListener('click', (e) => {
			if (link.href.includes('#')) {
				e.preventDefault();
				scrollToSection();
			}
		});
		function randomLetter() {
			letters.forEach((letter, i) => {
				setTimeout(() => {
					letter.style.order = 10 + i;
				}, 50 * i);
			});
		}
		function resetLetter() {
			letters.forEach((letter, i) => {
				letter.style.order = 0;
			});
		}
		function scrollToSection() {
			let id = link.href.split('#');
			sections.forEach((el) => {
				if (el.id === id[1]) window.scrollTo(0, el.offsetTop);
			});
		}
	});

	sections.forEach((section) => {
		window.addEventListener('scroll', () => {
			if (section.offsetTop <= window.pageYOffset + 1) {
				section.classList.add('animated');
			}
		});
	});

	// const textItems = text.querySelectorAll('.cursorItem');
	// function followCursor() {
	// 	position.X += (cursor.X - position.X) * speed;
	// 	position.Y += (cursor.Y - position.Y) * speed;

	// 	text.style.left = position.X + 'px';
	// 	text.style.top = position.Y + 'px';

	// 	textItems.forEach((txt, i) => {
	// 		if (i == position.Z) {
	// 			txt.classList.add('active');
	// 		} else {
	// 			txt.classList.remove('active');
	// 		}
	// 	});

	// 	const animate = requestAnimationFrame(followCursor);
	// }
	// followCursor();

	window.addEventListener('mousemove', (e) => {
		cursor.X = e.clientX;
		cursor.Y = e.clientY;
	});
}

function clock() {
	const clock = document.querySelector('.clockJS');
	if (clock) {
		function updateClock() {
			let date = new Date();
			let time = date.toLocaleString('en-US', {
				timeZone: 'Asia/Ho_Chi_Minh',
				hour: 'numeric',
				minute: 'numeric',
				hour12: true,
				timeZoneName: 'short',
			});
			clock.innerHTML = time;
		}
		updateClock();
		let updateEachMin = setInterval(updateClock, 60000);
	}
}

const END = 100;
function loader() {
	const loader = document.querySelector('.loaderJS');
	const wrapper = document.querySelector('#smooth-wrapper');

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
			if (percent >= 0.00002) {
				wrapper.style.transform = `translate( ${_X}vw, ${_Y}vh) scale(${_S}) `;
				const introAnimate = requestAnimationFrame(intro);
			} else {
				document.querySelector('body').classList.add('enter');
				wrapper.style.transform = `none`;
				try {
					smoothScroll();
				} catch {
					console.error('Smooth scroll is not working!');
				}
			}
		}
	}
}

function smoothScroll() {
	const smoothWrap = document.querySelector('#smooth-wrapper');
	const body = document.body;
	const maxHeight = Math.floor(smoothWrap.getBoundingClientRect().height - 1);
	body.style.height = maxHeight + 'px';

	const speed = 0.08;
	var offset = 0;

	const scrollTriggers = document.querySelectorAll('.scrollTrigger');

	function scroller() {
		const body = document.body;
		const maxHeight = Math.floor(smoothWrap.getBoundingClientRect().height - 1);
		body.style.height = maxHeight + 'px';

		offset += (window.pageYOffset - offset) * speed;

		var scroll = `translate3D(0,-${offset}px,0)`;
		smoothWrap.style.transform = scroll;

		if (body.classList.contains('welcome')) {
			scrollTriggers.forEach((el) => {
				const start = el.offsetTop - window.innerHeight / 2;
				const end = el.offsetTop - window.innerHeight + el.offsetHeight;
				if (offset > start || offset > end) {
					el.classList.add('active');
				}
			});
		}

		const animate = requestAnimationFrame(scroller);
	}
	scroller();
}
