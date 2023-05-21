export default function webgl() {
	// Sizes
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight,
	};

	// Canvas
	const canvas = document.querySelector('canvas.webGL');
	// Scene
	const scene = new THREE.Scene();
	// Object
	const geometry = new THREE.PlaneGeometry(1, 1, 1);

	const image = new Image();
	const texture = new THREE.Texture(image);
	image.addEventListener('load', () => {
		texture.needsUpdate = true;
	});
	image.src = '../../asset/image/image-removebg-preview.png';

	const material = new THREE.MeshBasicMaterial({
		map: texture,
		transparent: true,
		// color: 'red',
		// wireframe: true,
	});

	const mesh = new THREE.Mesh(geometry, material);
	console.log(material);

	scene.add(mesh);

	// Camera
	const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
	camera.position.z = sizes.height;
	scene.add(camera);

	// Renderer
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		alpha: true,
	});
	renderer.setSize(sizes.width, sizes.height);

	renderer.render(scene, camera);
}
