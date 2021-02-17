

mapboxgl.accessToken = 'pk.eyJ1IjoiY29tcGFueW1hcmtldCIsImEiOiJja2Q2YWwyeHkyZnEwMnpteWxmZmRxaW53In0.3CT6Xzcc6x6CogvXFJcRwQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/companymarket/ckbead4z711zh1jnxukrgbah5'
});
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());