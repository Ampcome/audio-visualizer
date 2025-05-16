/**
 * Fragment shader for the audio visualizer
 * Handles the coloring of the visualization
 */
declare const fragmentShader = "\n// Color uniforms\nuniform float u_red;\nuniform float u_green;\nuniform float u_blue;\n\n// Varying variables received from vertex shader\nvarying vec3 vNormal;\n\nvoid main() {\n  // Apply color based on uniform values\n  gl_FragColor = vec4(vec3(u_red, u_green, u_blue), 1.0);\n}\n";
export default fragmentShader;
