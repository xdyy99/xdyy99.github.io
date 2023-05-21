//===== IMPORT ASSETS =====//
// import aboutImg from '../static/image/avatar2023-removebg-preview.png';
// document.getElementById('aboutImg').src = aboutImg;

//===== VANILA JS =====//
const links = document.querySelectorAll('.cursorLink');
const sections = document.querySelectorAll('.sectionLink');
links.forEach((link) => {
	let letters = link.querySelectorAll('div');
	link.addEventListener('mouseenter', () => {
		randomLetter();
	});

	link.addEventListener('click', (e) => {
		if (!link.href) return;
		if (!link.href.includes('#')) return;

		e.preventDefault();
		scrollToSection();
	});
	function randomLetter() {
		letters.forEach((letter) => {
			letter.style.order = 0;
		});
		letters.forEach((letter, i) => {
			setTimeout(() => {
				letter.style.order = 10 + i;
			}, 50 * i);
		});
	}

	function scrollToSection() {
		let id = link.href.split('#');
		sections.forEach((el) => {
			if (el.id === id[1]) window.scrollTo(0, el.offsetTop);
		});
	}
});

// Show time at footer
const clock = document.querySelector('.clockJS');
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
const updateEachMin = setInterval(updateClock, 60000);

const headerBtn = document.querySelector('.headerBtn');
headerBtn.addEventListener('click', () => {
	headerBtn.classList.toggle('open');
});

//===== THREE JS =====//
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { CGEffect } from './js/lib/threejs/cgeffect.js';

/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webGL');

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
	aspect: window.innerWidth / window.innerHeight,
	aspectW: Math.round(window.innerWidth / 32),
	aspectH: Math.round(window.innerHeight / 32),
	pc: window.innerWidth >= 1024,
};

// Scene
const scenePix = new THREE.Scene();
const scenePor = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

const baseTexture = new THREE.WebGLRenderTarget(sizes.width, sizes.height, {
	minFilter: THREE.LinearFilter,
	magFilter: THREE.LinearFilter,
	format: THREE.RGBAFormat,
});

/**
 * Generate hero portrait
 */
const portrait = {
	geo: {},
	tex: {},
	mat: {},
	mesh: {},
	img: {},
	X: 0,
	Y: 0,
	scale: 0,
	W: 0,
	H: 0,
};
sizes.pc
	? (portrait.geo = new THREE.PlaneGeometry(sizes.height, sizes.height, 1, 1))
	: (portrait.geo = new THREE.PlaneGeometry(
			sizes.width * 1.5,
			sizes.width * 1.5,
			1,
			1
	  ));

portrait.tex = textureLoader.load('/image/hero-portrait2.png', () => {
	END += 10;
});
portrait.mat = new THREE.MeshBasicMaterial({
	map: portrait.tex,
	transparent: true,
	// wireframe: true,
});
portrait.mesh = new THREE.Mesh(portrait.geo, portrait.mat);
scenePor.add(portrait.mesh);
// For positions
portrait.img = document.querySelector('.portraitImg');

function portraitUpdate() {
	portrait.X = portrait.img.getBoundingClientRect().left;
	portrait.Y = portrait.img.getBoundingClientRect().top;
	portrait.scale =
		portrait.img.getBoundingClientRect().width / portrait.img.offsetWidth;

	introProgress > 0
		? (portrait.mesh.position.y = portrait.Y)
		: (portrait.mesh.position.y = -portrait.Y);

	portrait.mesh.scale.y = portrait.scale;
	portrait.mesh.scale.x = portrait.scale;
	if (sizes.pc) {
		portrait.mesh.position.x = portrait.X - (sizes.width - sizes.height) / 2;
	} else {
		portrait.mesh.position.y =
			-portrait.Y - (sizes.width * 1.5 - sizes.height) / 2;
		portrait.mesh.position.x = portrait.X;
	}
}

/**
 * Generate project slider
 */
const sliderImg = document.querySelector('.projectImg');
const slider = {
	urls: [
		'/image/pj-smet.jpg',
		'/image/pj-green.jpg',
		'/image/pj-mona.jpg',
		'/image/pj-afn.jpg',
		'/image/pj-mono.jpg',
		'/image/pj-alkf.jpg',
	],
	geo: {},
	group: {},
	W: sliderImg.offsetWidth,
	H: sliderImg.offsetHeight,
	aspectW: Math.round(sliderImg.offsetWidth / 32),
	aspectH: Math.round(sliderImg.offsetHeight / 32),
	pos: {},
	X: 0,
	Y: 0,
	imgs: [],
	meshes: [],
};

slider.geo = new THREE.PlaneGeometry(
	slider.W,
	slider.H,
	slider.aspectW,
	slider.aspectH
);
slider.pos = document.querySelector('.projectGroup');
slider.imgs = document.querySelectorAll('.projectImg');
slider.group = new THREE.Group();
slider.urls.forEach((url, i) => {
	let tex = textureLoader.load(url, () => {
		END += 10;
	});

	let mesh = {};
	if (sizes.pc) {
		let mat = new THREE.ShaderMaterial({
			uniforms: {
				uTexture: { value: tex },
				uDrag: { value: 0.0 },
			},
			vertexShader: `
			varying vec2 vUv;
	
			uniform float uDrag;
	
			void main()
			{
				vUv = uv;
				
				vec4 modelPosition = modelMatrix * vec4(position, 1.0);
				modelPosition.z -= cos(modelPosition.x * 0.001) * 300.0;

				modelPosition.x += cos(modelPosition.x * 0.001) * 100.0 * uDrag ;

				vec4 viewPosition = viewMatrix * modelPosition;
				vec4 projectedPosition = projectionMatrix * viewPosition;
				
				gl_Position = projectedPosition;
			}`,
			fragmentShader: `
			precision mediump float;
			varying vec2 vUv;
			uniform sampler2D uTexture;
	
			void main()
			{
				vec4 texture = texture2D(uTexture, vUv);
	
				gl_FragColor = texture;
			}`,
			transparent: true,
		});
		mesh = new THREE.Mesh(slider.geo, mat);
		mesh.position.x += (slider.W + sizes.width * 0.026) * i;
		mesh.position.z += 250;
		slider.group.add(mesh);
		scenePor.add(slider.group);
	} else {
		let mat = new THREE.ShaderMaterial({
			uniforms: {
				uTexture: { value: tex },
			},
			vertexShader: `
			varying vec2 vUv;
	
			void main()
			{
				vUv = uv;
				
				vec4 modelPosition = modelMatrix * vec4(position, 1.0);
				modelPosition.z += cos(modelPosition.y * 0.005) * 50.0;
	
				vec4 viewPosition = viewMatrix * modelPosition;
				vec4 projectedPosition = projectionMatrix * viewPosition;
				
				gl_Position = projectedPosition;
			}`,
			fragmentShader: `
			precision mediump float;
			varying vec2 vUv;
			uniform sampler2D uTexture;
	
			void main()
			{
				vec4 texture = texture2D(uTexture, vUv);
	
				gl_FragColor = texture;
			}`,
			transparent: true,
		});
		mesh = new THREE.Mesh(slider.geo, mat);
		let _Y = slider.imgs[i].getBoundingClientRect().top;

		mesh.position.y = -_Y - sizes.height * 0.5;
		mesh.position.z -= 25;
		scenePor.add(mesh);
		slider.meshes.push(mesh);
	}
});

// For positions
function sliderUpdatePC() {
	slider.X = slider.pos.getBoundingClientRect().left;
	slider.Y = slider.pos.getBoundingClientRect().top;

	slider.group.position.x = slider.X - sizes.width * (0.5 - 0.2);
	slider.group.position.y =
		-slider.Y +
		sizes.height * 0.5 -
		slider.pos.getBoundingClientRect().height * 0.5;
}

function sliderUpdateMB() {
	slider.imgs.forEach((img, i) => {
		let _X = img.getBoundingClientRect().left;
		let _Y = img.getBoundingClientRect().top;

		slider.meshes[i].position.x = +_X - (sizes.width - slider.W) * 0.5;
		slider.meshes[i].position.y = -_Y + (sizes.height - slider.H) * 0.5;
	});
}

/**
 * Generate contact signature
 */
const sign = {
	geo: {},
	tex: {},
	mat: {},
	mesh: {},
	img: {},
	X: 0,
	Y: 0,
	W: 0,
	H: 0,

	top: 0,
};

sign.img = document.querySelector('.signatureImg');
sign.W = sign.img.offsetWidth;
sign.H = sign.img.offsetHeight;

sign.geo = new THREE.PlaneGeometry(sign.W, sign.H, 1, 1);
sign.tex = textureLoader.load('/image/signature.png', () => {
	END += 10;
});
sign.mat = new THREE.MeshBasicMaterial({
	map: sign.tex,
	transparent: true,
	// wireframe: true,
});
sign.mesh = new THREE.Mesh(sign.geo, sign.mat);
scenePor.add(sign.mesh);

// For positions
function signUpdate() {
	// Parallax
	sign.top = Math.max(
		0,
		-((sign.img.getBoundingClientRect().top - sizes.height) * 0.25)
	);
	sign.img.style.top = `${sign.top}px`;

	// Position
	sign.Y = sign.img.getBoundingClientRect().top;

	sign.mesh.position.y =
		-sign.Y +
		sizes.height * 0.5 -
		sign.img.getBoundingClientRect().height * 0.5;
}

/**
 * Generate pixelated
 */
const pixel = {
	geo: {},
	tex: {},
	mat: {},
	mesh: {},
	list: [],
	number: 16,
	index: 0,
	opacity: 0,
	red: 1.0,
	green: 1.0,
	blue: 1.0,
};

pixel.geo = new THREE.PlaneGeometry(1024, 1024, 1, 1);

pixel.tex = textureLoader.load('/image/pixel1.png', () => {
	END += 10;
});
if (sizes.pc) {
	for (let i = 0; i < pixel.number; i++) {
		let material = new THREE.MeshBasicMaterial({
			map: pixel.tex,
			transparent: true,
			blending: THREE.AdditiveBlending,
			depthTest: false,
			depthWrite: false,
			opacity: 0,
		});
		let mesh = new THREE.Mesh(pixel.geo, material);
		mesh.rotation.z = (Math.floor(Math.random() * 10) * Math.PI) / 2;
		scenePix.add(mesh);
		pixel.list.push(mesh);
	}
}

function imageHover() {
	if (pixel.index >= pixel.number) pixel.index = 0;
	if (pixel.list[pixel.index]) {
		if (cursor.speed > 2) {
			// Position
			if (sizes.pc) {
				pixel.list[pixel.index].position.x =
					cursor.X - (cursor.X % 64) - cursor.cenX;
				pixel.list[pixel.index].position.y =
					cursor.cenY - cursor.Y + (cursor.Y % 64);
				pixel.list[pixel.index].material.opacity =
					0.1 * Math.min(cursor.speed / 10, 10);
			} else {
				pixel.list[pixel.index].position.x =
					cursor.X - (cursor.X % 32) - cursor.cenX;
				pixel.list[pixel.index].position.y =
					cursor.cenY - cursor.Y + (cursor.Y % 32);
				pixel.list[pixel.index].material.opacity =
					0.1 * Math.min(cursor.speed / 10, 10);
			}

			// Direction
			cursor.dirX <= 0 ? (pixel.red = 1) : (pixel.red = 0);
			cursor.dirY <= 0 ? (pixel.blue = 1) : (pixel.blue = 0);

			pixel.list[pixel.index].material.color = new THREE.Color(
				pixel.red,
				pixel.green,
				pixel.blue
			);

			cursor.dirX;
			cursor.dirY = clamp(cursor.Y - cursor.preY, -1, 1);

			cursor.preX = cursor.X;
			cursor.preY = cursor.Y;
			cursor.speed = 0;
			pixel.index++;
		}
	}
	pixel.list.forEach((m) => {
		if (m.material.opacity >= 0.0) {
			m.material.opacity -= 0.02;
		}
	});
}

/**
 * Camera
 */
// Base camera
const cameraPix = new THREE.PerspectiveCamera(53, sizes.width / sizes.height);
cameraPix.position.z = sizes.height;
scenePix.add(cameraPix);

const cameraPor = new THREE.PerspectiveCamera(53, sizes.width / sizes.height);
cameraPor.position.z = sizes.height;
scenePor.add(cameraPor);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Resize screen
window.addEventListener('resize', () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	sizes.aspect = window.innerWidth / window.innerHeight;
	sizes.pc = window.innerWidth >= 1024;

	// Update camera
	cameraPix.aspect = sizes.aspect;
	cameraPix.updateProjectionMatrix();

	cameraPor.aspect = sizes.aspect;
	cameraPor.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Composer
 */
const composer = new EffectComposer(renderer);
composer.setSize(sizes.width, sizes.height);
const renderPass = new RenderPass(scenePor, cameraPor);
composer.addPass(renderPass);
const cgePass = new ShaderPass(CGEffect);
composer.addPass(cgePass);

function updateCGE() {
	cgePass.uniforms.uDisplacement.value = baseTexture.texture;
	cgePass.uniforms.speed.value = cursor.dirX;
}

/**
 * Interactive
 */
const cursor = {
	X: 0,
	Y: 0,
	preX: 0,
	preY: 0,
	cenX: sizes.width / 2,
	cenY: sizes.height / 2,
	speed: 0,
	dirX: 0,
	dirY: 0,
};

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

window.addEventListener('mousemove', (e) => {
	cursor.X = e.clientX;
	cursor.Y = e.clientY;
	cursor.speed = Math.max(
		Math.abs(cursor.X - cursor.preX),
		Math.abs(cursor.Y - cursor.preY)
	);
	if (project.dragging && Math.abs(cursor.speed) > 2) project.dragged = true;

	cursor.dirX = clamp(cursor.X - cursor.preX, -1, 1);
	cursor.dirY = clamp(cursor.Y - cursor.preY, -1, 1);
});

/**
 * Animate
 */
let END = 0;
let isLoading = false;
let isIntro = false;
let canScroll = false;

// For loader & intro
const loader1 = document.querySelector('.loaderJS');
const loader2 = document.querySelector('.loaderMB');
const wrapper = document.querySelector('#smooth-wrapper');
const transform = {
	S: 35,
	X: -159,
	Y: -200,
};
const loadingSpeed = 0.04;
const introSpeed = 0.09;
let loadingProgress = 0;
let introProgress = 1;

function loading() {
	loadingProgress += (END - loadingProgress) * loadingSpeed;
	if (loadingProgress <= 99.9) {
		loader1.style.backgroundPositionX = 100 - loadingProgress + '%';
		loader2.style.backgroundPositionX = 100 - loadingProgress + '%';
	} else {
		isLoading = false;
		isIntro = true;
	}
}

function intro() {
	introProgress -= introProgress * introSpeed;
	if (introProgress >= 0.00001 && sizes.pc) {
		let _S = 1 + transform.S * introProgress;
		let _X = transform.X * introProgress;
		let _Y = transform.Y * introProgress;
		wrapper.style.transform = `translate3D( ${_X}vw, ${_Y}vh,0) scale(${_S}) `;
	} else {
		introProgress = 0;
		isIntro = false;
		wrapper.style.transform = `none`;
		document.querySelector('body').classList.add('enter');
		canScroll = true;
	}
}

// For hero title
const hero = document.querySelector('.heroJS');
const texts = hero.querySelectorAll('.heroItem');
const txt = {
	current: 0,
	acceleration: 0,
	direction: -1,
	speed: sizes.width / (60 * 4),
	pos: 0,
};
function heroUpdate() {
	txt.acceleration = txt.current - window.pageYOffset;
	txt.acceleration <= 0 ? (txt.direction = -1) : (txt.direction = 1);
	txt.current -= txt.acceleration * 0.1;
	txt.pos += txt.speed * txt.direction + txt.acceleration * 0.1;
	sizes.pc
		? (hero.style.transform = ` translate3D(0,-50%,0) skew(${
				txt.acceleration * 0.05
		  }deg)`)
		: (hero.style.transform = ` translate3D(0,0,0) skew(${
				txt.acceleration * 0.05
		  }deg)`);

	texts.forEach((text, i) => {
		if (txt.pos < -text.offsetWidth) txt.pos = 0;
		if (txt.pos > 0) txt.pos = -text.offsetWidth;

		text.style.transform = `translate3D(${txt.pos}px,0,0)`;
	});
}

// For about word
const aboutWord = document.querySelectorAll('.aboutWord');
const cursorAB = {
	X: 0,
	Y: 0,
	top: 0,
	left: 0,
	speed: 0.08,
};
aboutWord.forEach((el) => {
	el.addEventListener('mousemove', (e) => {
		cursorAB.X = cursor.X - el.getBoundingClientRect().left;
		cursorAB.Y = cursor.Y - el.getBoundingClientRect().top;
	});
});
function aboutUpdate() {
	cursorAB.top += (cursorAB.Y - cursorAB.top) * cursorAB.speed;
	cursorAB.left += (cursorAB.X - cursorAB.left) * cursorAB.speed;
	document.documentElement.style.setProperty('--abTop', `${cursorAB.top}px`);
	document.documentElement.style.setProperty('--abLeft', `${cursorAB.left}px`);
}

// For project
const projectJS = document.querySelector('.projectJS');
const projectWrap = document.querySelector('.projectWrap');
const projectStatus = document.querySelector('.projectStatus');
const projectGroup = document.querySelector('.projectGroup');
const projectItems = document.querySelectorAll('.projectImg');
const project = {
	X: -projectGroup.offsetWidth,
	Y: 0,
	dragging: false,
	dragged: false,
	start: 0,
	MAX: 0,
	MIN: 0,
	distance: sizes.width,
	speed: 0.08,
	total: projectItems.length,
};
function projectUpdate() {
	if (project.dragging) {
		// Dragging
		project.distance = cursor.X - project.start;
		project.X += project.distance * project.speed;
		project.start += project.distance * project.speed;
	} else if (Math.abs(project.distance) > project.speed) {
		// Ease out

		project.X += project.distance * project.speed;
		project.distance -= project.distance * project.speed;
	} else {
		// Scrolling

		let pos = projectJS.getBoundingClientRect().top;
		if (pos - sizes.height * 0.9 <= 0 && pos + sizes.height >= 0) {
			project.X += (window.pageYOffset - scrollOffset) * project.speed;
		}
	}

	// Limit
	project.MAX = projectWrap.offsetWidth / 2 - (sizes.width * 0.4) / 2;
	project.MIN =
		-projectGroup.offsetWidth +
		projectWrap.offsetWidth / 2 +
		(sizes.width * 0.4) / 2;

	if (project.X >= project.MAX) {
		project.distance = 0;
		project.X = project.MAX;
	} else if (project.X <= project.MIN) {
		project.distance = 0;
		project.X = project.MIN;
	}

	// Parallax
	project.Y = Math.max(
		0,
		-((projectJS.getBoundingClientRect().top - sizes.height) * 0.25)
	);

	// Execute
	projectGroup.style.transform = `translate3D(${project.X}px,0,0)`;
	projectWrap.style.top = `${project.Y}px`;

	// Active index
	projectItems.forEach((item, i) => {
		let start = item.getBoundingClientRect().left;
		let end =
			item.getBoundingClientRect().left + item.getBoundingClientRect().width;
		if (start <= sizes.width / 2 && end >= sizes.width / 2) {
			projectStatus.innerHTML = `${project.total - i}-${project.total}`;
			item.classList.add('active');
		} else {
			item.classList.remove('active');
		}
	});
}

if (sizes.pc) {
	projectItems.forEach((item) => {
		item.addEventListener('mousedown', (e) => {
			e.preventDefault();
			project.dragged = false;
		});
		item.addEventListener('click', (e) => {
			e.preventDefault();
		});
		item.addEventListener('mouseup', (e) => {
			if (!project.dragged) window.open(item.href, '_blank');
		});
	});
	projectWrap.addEventListener('mouseenter', () => {
		projectWrap.style.cursor = `grab`;
	});
	projectWrap.addEventListener('mousedown', (e) => {
		e.preventDefault();
		project.dragging = true;
		project.start = cursor.X;

		project.X = projectGroup.getBoundingClientRect().left;
		projectWrap.style.cursor = `grabbing`;
	});
	window.addEventListener('mouseup', () => {
		projectWrap.style.cursor = `grab`;
		project.dragging = false;
	});
}

// For scrolling
let scrollOffset = 0;
const smoothWrap = document.querySelector('#smooth-wrapper');
const scrollState = document.querySelector('.scrollState');
const body = document.body;
const scrollSpeed = 0.08;
function scroller() {
	const maxHeight = Math.floor(smoothWrap.getBoundingClientRect().height - 1);
	body.style.height = maxHeight + 'px';

	scrollOffset += (window.pageYOffset - scrollOffset) * scrollSpeed;
	smoothWrap.style.transform = `translate3D(0,-${scrollOffset}px,0)`;
	scrollState.style.width = `${
		(scrollOffset / (body.scrollHeight - sizes.height)) * 100
	}%`;
}

// Tỉmer
const timer = new THREE.Clock();
let deltaTime = 0;
// 60 fps
const FPSlimit = 1 / 60;

const tick = () => {
	// Call tick again on the next frame
	window.requestAnimationFrame(tick);

	// Loader
	if (isLoading) loading();

	// Intro
	if (isIntro) intro();

	// Smooth scroll
	if (canScroll && sizes.pc) scroller();

	// Hero title
	heroUpdate();

	// Portrait position
	portraitUpdate();

	// About tooltip
	aboutUpdate();

	if (sizes.pc) {
		// Project slider
		projectUpdate();

		// Slider position
		sliderUpdatePC();
	} else {
		// Slider position
		sliderUpdateMB();
	}

	// Signature position
	signUpdate();

	// Scroll trigger
	sections.forEach((section) => {
		let secStart = section.getBoundingClientRect().top - sizes.height / 4;
		let secEnd =
			section.getBoundingClientRect().top +
			section.getBoundingClientRect().height -
			sizes.height;
		if (secStart <= 0 || secEnd <= 0) {
			section.classList.add('animated');
		}
	});

	if (sizes.pc) {
		// Images hover
		if (sizes.pc) imageHover();

		// Render
		renderer.setRenderTarget(baseTexture);
		renderer.render(scenePix, cameraPix);
		updateCGE();
		renderer.setRenderTarget(null);
		renderer.clear();
	}
	composer.render();
};

tick();

window.addEventListener('load', () => {
	// console.clear();
	console.log(
		'%cDesigned and developed by Duynguyen',
		'color: red; font-size: 30px; font-weight: 900'
	);
	isLoading = true;
	END += 20;
});
