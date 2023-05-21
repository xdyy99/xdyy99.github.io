/**
 * Chromatic & Glitch Effect
 * Shifts red and blue channels from center in opposite directions
 * Shifts X offset base on alpha value
 *
 *
 * amount: shift distance (1 is width of input)
 * angle: shift angle in radians
 */

const CGEffect = {
	uniforms: {
		tDiffuse: { value: null },
		uDisplacement: { value: null },
		speed: { value: 0.1 },
		angle: { value: 0.0 },
	},

	vertexShader: /* glsl */ `
		varying vec2 vUv;
		
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		
		}`,

	fragmentShader: /* glsl */ `

		uniform sampler2D tDiffuse;
		uniform float angle;
		
		uniform float speed;
		
		uniform sampler2D uDisplacement;
		varying vec2 vUv;
		
		void main() {
			vec4 displacement = texture2D(uDisplacement, vUv);

			float amount = 0.01 * displacement.a;
			float strengthX = 0.05 * (1.0 - displacement.r * 2.0);
			float strengthY = 0.05 * (1.0 - displacement.b * 2.0);
			
			vec2 glitch = vUv;

				glitch.x -= displacement.a * strengthX ;
				glitch.y += displacement.a * strengthY ;


			vec4 color = texture2D(tDiffuse, glitch);
			
			vec2 offset = amount * 1.2 * vec2( cos(angle), sin(angle));
	
			vec4 cr = texture2D(tDiffuse, glitch + offset);
			vec4 cga = texture2D(tDiffuse, glitch);
			vec4 cb = texture2D(tDiffuse, glitch - offset);


			// gl_FragColor = color;
			// gl_FragColor = color * vec4(cr.r, cga.g, cb.b, cga.a)  ;
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);


		}`,
};

export { CGEffect };
