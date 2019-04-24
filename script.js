$(document).ready(function () {
    var map = L.map('map').setView([50.301, 18.654], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoia2Fyb2xpbmFrYXIiLCJhIjoiY2p1djFlNmR6MG16aTQzbnZ0cW1sN2V2ZCJ9.j1JiL0R3chWl5W5lug5lCg'
    }).addTo(map)

    map.on('click', function(e){
        var marker = new L.marker(e.latlng).addTo(map);
    });

});

