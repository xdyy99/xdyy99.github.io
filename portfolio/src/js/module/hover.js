export default function hover() {
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

	const cursorLinks = document.querySelectorAll('.cursorLink');
	const sections = document.querySelectorAll('.sectionLink');

	cursorLinks.forEach((link, i) => {
		let letters = link.querySelectorAll('div');

		link.addEventListener('mouseenter', () => {
			position.Z = 1;
			randomLetter();
		});
		link.addEventListener('mouseleave', () => {
			resetLetter();
		});
		link.addEventListener('click', (e) => {
			e.preventDefault();
			scrollToSection();
		});
		function randomLetter() {
			letters.forEach((letter, i) => {
				setTimeout(() => {
					letter.style.order = 100 + i;
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
				if (el.id == id[1]) window.scrollTo(0, el.offsetTop);
			});
		}
	});

	const hero = document.querySelector('#hero');
	hero.addEventListener('mouseenter', () => {
		position.Z = 1;
	});
	// const hero2 = document.querySelector('#hero');
	// hero2.addEventListener('mouseenter', () => {
	// 	position.Z = 2;
	// });
	const about = document.querySelector('#about');
	about.addEventListener('mouseenter', () => {
		position.Z = 3;
	});
	const project = document.querySelector('#project');
	project.addEventListener('mouseenter', () => {
		position.Z = 4;
	});
	const contact = document.querySelector('#contact');
	contact.addEventListener('mouseenter', () => {
		position.Z = 5;
	});

	const text = document.querySelector('.cursorTxt');
	const textItems = text.querySelectorAll('.cursorItem');
	function followCursor() {
		position.X += (cursor.X - position.X) * speed;
		position.Y += (cursor.Y - position.Y) * speed;

		text.style.left = position.X + 'px';
		text.style.top = position.Y + 'px';

		textItems.forEach((txt, i) => {
			if (i == position.Z) {
				txt.classList.add('active');
			} else {
				txt.classList.remove('active');
			}
		});

		const animate = requestAnimationFrame(followCursor);
	}
	followCursor();

	window.addEventListener('mousemove', (e) => {
		cursor.X = e.clientX;
		cursor.Y = e.clientY;
	});
}
