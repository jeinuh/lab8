function initMap() {
	// add your code here
	L.mapquest.key = 'gIOHw0oNd2p2zmP5Wjrb6t8Ax8ZCLtBr';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.8787004873143, -117.23589673102272],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false
	});

	L.marker([32.8787004873143, -117.23589673102272]).addTo(map); 
}