mapboxgl.accessToken = 'pk.eyJ1IjoiYXJwaXRhYWQiLCJhIjoiY2wwa2Z0ZzRvMG0wdzNicDdkemR1Z3VhOSJ9.mT_D1fA105TLX15jNVqN-g';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 13
});

var marker = new mapboxgl.Marker()
    .setLngLat([-71.092761, 42.357575])
    .addTo(map);  

    const busStops = [
    [-71.092761, 42.357575],
    [-71.093729, 42.359244], 
    [-71.094915, 42.360175],
    [-71.095800, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863]
];
var busStopAnimation;
var counter=0;
function move() {
    busStopAnimation = setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      updateCurrentStop();
      updateCurrentStopNumber();
      counter++;
      move();
    }, 1000)
    
  }

  function pause(){
    clearTimeout(busStopAnimation);
  }

let currentStopElement = document.getElementById('currentStop');
let currentStopNumberElement = document.getElementById('currentStopNumber');
currentStopElement.innerHTML = 'Current Stop Lng & Lat: ' + busStops[counter];
currentStopNumberElement.innerHTML = 'Current Stop Number: ' + counter;
function updateCurrentStop() {
    currentStopElement.innerHTML = 'Current Stop Lng & Lat: ' + busStops[counter];
}

function updateCurrentStopNumber() {
    currentStopNumberElement.innerHTML = 'Current Stop Number: ' + counter;
}
