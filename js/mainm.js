// Select the canvas element and create a WebGLRenderer instance
const canvas = document.querySelector('#myCanvasM');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });


// Set the background color of the renderer
renderer.setClearColor(0x000000, 0);

// Set up the camera with a perspective projection
const fov = 63;
const aspect = 1/1.70;
const near = 0.02;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

// Create a new scene
const scene = new THREE.Scene();

// Create a wireframe platonic shape and add it to the scene
const radius = 2.5;
const detail = 2;
const geometry = new THREE.TetrahedronGeometry(radius, detail);
const material = new THREE.MeshBasicMaterial({ color: '#bb86fc', wireframe: true });const platonicShape = new THREE.Mesh(geometry, material);
scene.add(platonicShape);

// Define a function to handle window resizing
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.parentElement.clientWidth;
  const aspectRatio = 1/1.70; // Adjust this based on your desired aspect ratio
  const height = width * aspectRatio;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Define the render function to update the rotation and render the scene
function render(time) {
  time *= 0.001; // Convert to seconds

  // Handle window resizing
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  // Update the rotation of the platonic shape
  platonicShape.rotation.x = time;
  platonicShape.rotation.y = time;

  // Render the scene with the updated camera and platonic shape
  renderer.render(scene, camera);

  // Request the next animation frame and call the render function again
  requestAnimationFrame(render);
}

window.onload = function() {
  var githubLogo = document.querySelector('.githublogo');
  var linkedinLogo = document.querySelector('.linkedinlogo');

  githubLogo.addEventListener('mouseover', function() {
      githubLogo.src = "images/github-sign-hover.png";
  });
  githubLogo.addEventListener('mouseout', function() {
      githubLogo.src = "images/github-sign.png";
  });

  linkedinLogo.addEventListener('mouseover', function() {
      linkedinLogo.src = "images/linkedin-logo-hover.png";
  });
  linkedinLogo.addEventListener('mouseout', function() {
      linkedinLogo.src = "images/linkedin-logo.png";
  });
};

// Start the animation loop by calling the render function
requestAnimationFrame(render);