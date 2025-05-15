/**
 * Fragment shader for the audio visualizer
 * Handles the coloring of the visualization
 */
const fragmentShader = `
// Color uniforms
uniform float u_red;
uniform float u_green;
uniform float u_blue;

// Varying variables received from vertex shader
varying vec3 vNormal;

void main() {
  // Apply color based on uniform values
  gl_FragColor = vec4(vec3(u_red, u_green, u_blue), 1.0);
}
`;

export default fragmentShader;
