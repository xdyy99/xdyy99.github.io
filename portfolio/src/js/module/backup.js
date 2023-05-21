/*
 *   Portrait hover effect shader
 */
// portrait.mat = new THREE.RawShaderMaterial({
// 	uniforms: {
// 		// ...
// 		uTexture: { value: portrait.tex },
// 		uDisplacement: { value: null },
// 	},
// 	vertexShader: `
//         uniform mat4 projectionMatrix;
//         uniform mat4 viewMatrix;
//         uniform mat4 modelMatrix;

//         attribute vec3 position;
//         attribute vec2 uv;
// 				uniform sampler2D uDisplacement;

//         varying vec2 vUv;
// 				float vOpacity;

// 				float PI = 3.14159265359;

//         void main()
//         {
// 					vUv = uv;
// 					vec4 displacement = texture2D(uDisplacement, vUv);
// 					vOpacity = displacement.a;
// 					float tX = 0.0;
// 				  if(position.x > 0.0){
// 						tX = vOpacity * 200.0  ;
// 					}
// 					else  {
// 						tX = vOpacity * -200.0 ;
// 					}
// 					float tY = 0.0;
// 					float tZ = 0.0 ;

// 					// Translate
// 					mat4 tPos = mat4(vec4(1.0,0.0,0.0,0.0),
// 											vec4(0.0,1.0,0.0,0.0),
// 											vec4(0.0,0.0,1.0,0.0),
// 											vec4(tX,tY,tZ,1.0));

// 					vec4 modelPosition = modelMatrix * tPos  * vec4(position, 1.0);

// 					vec4 viewPosition = viewMatrix * modelPosition;
// 					vec4 projectedPosition = projectionMatrix * viewPosition;

// 					gl_Position = projectedPosition;

//         }
//     `,
// 	fragmentShader: `
//     precision mediump float;

//     uniform sampler2D uTexture;
//     uniform sampler2D uDisplacement;

//     varying vec2 vUv;
// 		float PI = 3.14159265359;

//     void main()
//     {

// 			vec4 color = texture2D(uTexture, vUv) ;

//       gl_FragColor = color;
//     }
//     `,
// 	transparent: true,
// });
