const map = L.map('map').setView([47.84876, 30.26714], 17);

const basemaps = { 
  StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',   {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
  Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?',   {layers: 'TOPO-WMS'}),
  Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'OSM-Overlay-WMS'})
};

L.control.layers(basemaps).addTo(map);

basemaps.StreetView.addTo(map);

const basicBeachIcon = L.icon({iconUrl: 'https://pixlok.com/wp-content/uploads/2021/07/Map-Pointer-Icon-9desd3.png', iconSize: [25, 25], // size of the icon
});


const marker1 = L.marker([47.84889, 30.26718], {icon: basicBeachIcon})
            .bindPopup('Whitehaven Beach, Whitsunday Island')
            .addTo(map);
