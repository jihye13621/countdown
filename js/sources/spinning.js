// website accent colors are 50acfd, 02f1ff
// 3js code goes here
var scene3d = document.getElementById("ThreeJsCanvas");
var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 400;
// SCENE
var scene_header = new THREE.Scene();
// CAMERA
camera_header = new THREE.PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 1000);
camera_header.position.set(0, 0, 150);
camera_header.lookAt(scene_header.position);
// RENDERER
// transparent div background color
var renderer_header = new THREE.WebGLRenderer( { alpha: true } );
renderer_header.setClearColor( 0x000000, 0 );
renderer_header.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
// GEOMETRY & MATERIALS
// outlined sphere
var geometry_sphere = new THREE.TorusGeometry( 73, 1, 16, 100 );
var geometry_sphere = new THREE.DodecahedronGeometry( 80 );

var material_phong_outlined = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shininess:30,
    opacity: 0.4,
    specular: 0x111111,
    wireframe: true
});
var sphere_outlined = new THREE.Mesh(geometry_sphere, material_phong_outlined);
scene_header.add(sphere_outlined);
sphere_outlined.castShadow = true;
sphere_outlined.receiveShadow = true;
material_phong_outlined.transparent=true;
// outlined sphere ends
// materials
var lambertMaterial = new THREE.MeshLambertMaterial({
    opacity: 0.1,
    color: 0x50acfd
});
lambertMaterial.transparent=true;
var color = new THREE.Color( "#50acfd" );
var material_phong_shiny = new THREE.MeshPhongMaterial( {
    color: color.getHex(),
    // opacity: 0.9,
    specular: 0xffffff,
    shinyness: 100
} );
//torus
var geometry_torus = new THREE.OctahedronGeometry(60, 2);
// var geometry_torus = new THREE.TorusKnotGeometry( 40, 3.5, 100, 10 );
var torus_mesh = new THREE.Mesh( geometry_torus, lambertMaterial );
var torus_mesh_outline = new THREE.Mesh( geometry_torus, material_phong_outlined );
scene_header.add( torus_mesh );
scene_header.add( torus_mesh_outline );
//LOCATION ICONS
location_icon_PivotPoint = new THREE.Object3D();
location_icon_PivotPoint.position.set( 0, 0, 0 );
var location_icon_geometry_logo = new THREE.BoxGeometry( 80, 80, 0 );
var location_icon_geometry = new THREE.BoxGeometry( 20, 20, 0 );
//   var location_icon_material = new THREE.MeshBasicMaterial( {color: 0x8d8d8d} ); //test material of plain color
THREE.ImageUtils.crossOrigin = '';
var location_icon_image_logo = THREE.ImageUtils.loadTexture( 'https://i.imgur.com/cwAshXM.png' );
var location_icon_image = THREE.ImageUtils.loadTexture( 'https://i.imgur.com/GQRTEFZ.png' );
var location_icon_imageMaterial_logo = new THREE.MeshBasicMaterial( {
    map: location_icon_image_logo,
    opacity: 0.75
});
var location_icon_imageMaterial = new THREE.MeshBasicMaterial( {
    map: location_icon_image,
    opacity: 0.75
});
location_icon_imageMaterial_logo.transparent = true;
location_icon_imageMaterial.transparent = true;
//NOTE: tiling of images in textures only functions if image dimensions are powers of two
//for examples: (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...)
location_icon_image_logo.wrapS = location_icon_image_logo.wrapT = THREE.RepeatWrapping;
var location_icon_Mesh_logo = new THREE.Mesh( location_icon_geometry_logo, location_icon_imageMaterial_logo );
location_icon_image.wrapS = location_icon_image.wrapT = THREE.RepeatWrapping;
var location_icon_Mesh = new THREE.Mesh( location_icon_geometry, location_icon_imageMaterial );
var location_icon_Mesh2 = new THREE.Mesh( location_icon_geometry, location_icon_imageMaterial );
var location_icon_Mesh3 = new THREE.Mesh( location_icon_geometry, location_icon_imageMaterial );
scene_header.add( location_icon_Mesh_logo );
scene_header.add( location_icon_Mesh );
scene_header.add( location_icon_Mesh2 );
scene_header.add( location_icon_Mesh3 );
location_icon_PivotPoint.add( location_icon_Mesh );
location_icon_PivotPoint.add( location_icon_Mesh2 );
location_icon_PivotPoint.add( location_icon_Mesh3 );
scene_header.add( location_icon_PivotPoint );
location_icon_Mesh.position.z = 60;
location_icon_Mesh.position.x = 60;
location_icon_Mesh.rotation.y = Math.PI/3;
location_icon_Mesh2.position.z = -60;
location_icon_Mesh2.position.x = 60;
location_icon_Mesh2.position.x = -20;
location_icon_Mesh3.position.z = 60;
location_icon_Mesh3.position.x = -60;
location_icon_Mesh3.rotation.y = -Math.PI/3;
//location icons end----------------------------
//CIRCULAR FLOOR
//Create a ground for shape to hover over
var groundGeometry = new THREE.CircleGeometry(7, 50);
var texture_ground = new THREE.MeshPhongMaterial( {
    color:0x50acfd,
    opacity: 0.8,
    specular: 0xffffff,
    shinyness: 20,
    side: THREE.DoubleSide} );
var ground = new THREE.Mesh(groundGeometry, texture_ground);
ground.rotation.x = -Math.PI / 2;
ground.position.set(0, -55, 0); // (0, -105, 0) to go below the outlined sphere
ground.receiveShadow = true;
scene_header.add(ground);
// brighter lights
var ambientLight = new THREE.AmbientLight( 0x9b9b9b );
scene_header.add( ambientLight );
var lights_header = [];
lights_header[ 0 ] = new THREE.PointLight( 0x090269, 1, 0 );
lights_header[ 1 ] = new THREE.PointLight( 0x990269, 1, 0 );
lights_header[ 2 ] = new THREE.PointLight( 0x72f1ff, 1, 0 );
lights_header[ 0 ].position.set( 0, 200, 0 );
lights_header[ 1 ].position.set( 100, 200, 100 );
lights_header[ 2 ].position.set( - 100, - 200, - 100 );
scene_header.add( lights_header[ 0 ] );
scene_header.add( lights_header[ 1 ] );
scene_header.add( lights_header[ 2 ] );
// light cast shadows
lights_header[ 0 ].castShadow = true;
lights_header[ 1 ].castShadow = true;
lights_header[ 2 ].castShadow = true;
// FINISH SCENE SETUP
// document.body.appendChild(scene3d.domElement);
ThreeJsCanvas.appendChild(renderer_header.domElement);
// renderer.render(scene, camera);
var steps=0;
var render = function () {
    steps+=0.07;
    requestAnimationFrame(render);
    sphere_outlined.rotation.y += 0.01;
    sphere_outlined.rotation.z += 0.01;
    torus_mesh_outline.rotation.y -= 0.01;
    torus_mesh.rotation.y -= 0.01;
    torus_mesh_outline.rotation.z -= 0.001;
    torus_mesh.rotation.z -= 0.001;
    torus_mesh_outline.position.y = 5 + (1.7*(Math.cos(steps)));
    torus_mesh.position.y = 5 + (1.7*(Math.cos(steps)));
    location_icon_PivotPoint.rotation.y+=0.004; 
    location_icon_PivotPoint.position.y = 5 + (2.7*(Math.cos(steps)));
    location_icon_PivotPoint.position.y = 5 + (2.7*(Math.cos(steps)));
    location_icon_Mesh_logo.position.y = (2*(Math.cos(steps)));
    renderer_header.render(scene_header, camera_header);
};
render();