var ultimaImagen = document.getElementById('imagenprincipal').src;


function img1() {
var ultimaImagen = document.getElementById('imagenprincipal').src;
document.getElementById('imagenprincipal').src='./album/img1.jpg';
}


function img3() {
	var ultimaImagen = document.getElementById('imagenprincipal').src;
document.getElementById('imagenprincipal').src='./album/img3.jpg';
}


function img4() {
	var ultimaImagen = document.getElementById('imagenprincipal').src;
document.getElementById('imagenprincipal').src='./album/img4.jpg';
}


function img5() {
	var ultimaImagen = document.getElementById('imagenprincipal').src;
document.getElementById('imagenprincipal').src='./album/img5.jpg';
}

function volver () {
	var ultimaImagen = document.getElementById('imagenprincipal').src;
	document.getElementById("imagenprincipal").src="./album/img2.jpg"}


function imagenFija(archivo) {
	var dirtemo = "./album/"+archivo;
	ultimaImagen =document.getElementById('imagenprincipal').src= dirtemo;
}
