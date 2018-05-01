const mapboxgl = require('mapbox-gl');


const buildMarker = function(pin, coords){

  const type = {
    Activity: 'http://i.imgur.com/WbMOfMl.png',
    Hotel: 'http://i.imgur.com/D9574Cu.png',
    Restaurant: 'http://i.imgur.com/cqR6pUI.png'
  }


const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = `url(${type[pin]})`;

return new mapboxgl.Marker(markerDomEl).setLngLat(coords); // [-87.641, 41.895] for Chicago

}

module.exports = buildMarker;
