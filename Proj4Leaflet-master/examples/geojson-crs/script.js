var map = L.map('map').setView([39.90,116.38], 10);

var osmAttr = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    mqTilesAttr = 'Tiles &copy; <a href="https://www.mapquest.com/"" target="_blank">MapQuest</a> <img src="https://developer.mapquest.com/content/osm/mq_logo.png" />';

L.tileLayer(
  'http://localhost:9090/1818940751/{z}/{x}/{y}.png',
  {
      attribution: 'Data by <a href="https://openstreetmap.org">OpenStreetMap contributors</a>'
  }
).addTo(map);

// GeoJSON layer (UTM15)
proj4.defs('EPSG:26915', '+proj=utm +zone=10 +ellps=GRS80 +datum=NAD83 +units=m +no_defs');

var geojson = {
  'type': 'Feature',
  'geometry': {
    'type': 'Point',
    'coordinates': [481650, 4980105],
  },
  'properties': {
    'name': 'University of Minnesota'
  },
  'crs': {
    'type': 'name',
    'properties': {
        'name': 'urn:ogc:def:crs:EPSG::26915'
      }
    }
  };

L.Proj.geoJson(geojson, {
  'pointToLayer': function(feature, latlng) {
    return L.marker(latlng).bindPopup(feature.properties.name);
  }
}).addTo(map);

new L.marker([39.90,116.38]).addTo(map);
new L.marker([40.13,116.47]).addTo(map);