/**
 * Created by Frank on 29-9-2016.
 */

var geometry = new THREE.SphereGeometry(0.5,32,32);
var blackMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
var blackSphere = new THREE.Mesh( geometry, blackMaterial );

Object.defineProperty(blackSphere, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blackSphere, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blackSphere, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

//Whiteball

var material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
var whiteSphere = new THREE.Mesh( geometry, material );
Object.defineProperty(whiteSphere, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(whiteSphere, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(whiteSphere, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

//blue material
var blueMaterial = new THREE.MeshPhongMaterial( {color: 0x0000ff} );


//Redball

var redMaterial = new THREE.MeshPhongMaterial( {color: 0xff0000} );
var redSphere1 = new THREE.Mesh( geometry, redMaterial );

Object.defineProperty(redSphere1, 'directionX', {
   value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere1, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere1, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});


var blueSphere1 = new THREE.Mesh( geometry, blueMaterial);

Object.defineProperty(blueSphere1, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere1, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere1, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});



var blueSphere2 = new THREE.Mesh( geometry, blueMaterial );

Object.defineProperty(blueSphere2, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere2, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere2, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});


var redSphere2 = new THREE.Mesh( geometry, redMaterial );

Object.defineProperty(redSphere2, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere2, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere2, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere3 = new THREE.Mesh( geometry, redMaterial );

Object.defineProperty(redSphere3, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere3, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere3, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var blueSphere3 = new THREE.Mesh( geometry, blueMaterial );

Object.defineProperty(blueSphere3, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere3, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere3, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere4 = new THREE.Mesh( geometry, redMaterial );

Object.defineProperty(redSphere4, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere4, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere4, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var blueSphere4 = new THREE.Mesh( geometry, blueMaterial );

Object.defineProperty(blueSphere4, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere4, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere4, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere5 = new THREE.Mesh( geometry, redMaterial );

Object.defineProperty(redSphere5, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere5, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere5, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var blueSphere5 = new THREE.Mesh( geometry, blueMaterial );

Object.defineProperty(blueSphere5, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere5, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere5, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere6 = new THREE.Mesh( geometry,redMaterial );

Object.defineProperty(redSphere6, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere6, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere6, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var blueSphere6 = new THREE.Mesh( geometry, blueMaterial );

Object.defineProperty(blueSphere6, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere6, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere6, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere7 = new THREE.Mesh( geometry, redMaterial);

Object.defineProperty(redSphere7, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere7, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere7, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var blueSphere7 = new THREE.Mesh( geometry, blueMaterial );

Object.defineProperty(blueSphere7, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere7, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(blueSphere7, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

