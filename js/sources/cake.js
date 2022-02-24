$(document).ready(function() {
    initSTL();
});

function initSTL() {
    // 3js
    let ThreeJsCanvas2;
  
    let scene_header2 = new THREE.Scene();
    // set the size of the canvas
    let CANVAS_WIDTH = 1500;
    let CANVAS_HEIGHT = 300;
    // CAMERA
    let camera_header2 = new THREE.PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 1000);
    camera_header2.position.set(0, 50, 150);
    camera_header2.lookAt(scene_header2.position);
  
    // RENDERER
    // transparent div background color
    let renderer_header2 = new THREE.WebGLRenderer( { alpha: true } );
    renderer_header2.setClearColor( 0x000000, 0 );
    renderer_header2.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

    var cakeLoader = new THREE.STLLoader(); // loads big shark into the scene------------------

    cakeLoader.addEventListener( 'load', function ( event ) {
        let material = new THREE.MeshNormalMaterial()
        var geometry = event.content;
        geometry.computeTangents();
        shark1 = new THREE.Mesh( geometry, material );
        shark1.position.set( -15, 10, 15);
        // shark1.rotation.set( - 1.6, 1.5, 1.5);
        // shark1.rotation.set( - 1.6, 1.5, 1.5);
        shark1.scale.set( 3, 3, 3 );

        shark1.castShadow = true;
        shark1.receiveShadow = true;

        scene_header2.add( shark1 );

    } );
    cakeLoader.load( 'stl/cake.stl' );            
  
    ThreeJsCanvas2 = document.getElementById("ThreeJsCanvas2");
    ThreeJsCanvas2.appendChild(renderer_header2.domElement);

    let render = function () {
      requestAnimationFrame(render);
      scene_header2.rotation.y += 0.01;
      scene_header2.rotation.x += 0.005;
      renderer_header2.render(scene_header2, camera_header2);
    };
    render();
  }