var markers = [];

$(document).ready(function () {
    initMap();
    initTable();
});

function initMap() {
    var map = L.map('map').setView([50.301, 18.654], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoia2Fyb2xpbmFrYXIiLCJhIjoiY2p1djFlNmR6MG16aTQzbnZ0cW1sN2V2ZCJ9.j1JiL0R3chWl5W5lug5lCg'
    }).addTo(map);

    registerClickHandler(map);
}

function registerClickHandler(map) {
    map.on('click', function (e) {
        var marker = new L.marker(e.latlng, {draggable: true})
            .addTo(map)
            .on('dragend', function () {
                updateMarker(this._leaflet_id, this._latlng.lat, this._latlng.lng);
            });

        addMarker(marker._leaflet_id, marker._latlng.lat, marker._latlng.lng);
    });
}

function initTable() {
    $('#table').bootstrapTable({
        data: markers
    });
}

function addMarker(id, lat, lng) {
    markers.push({
        id: id,
        lat: lat,
        lng: lng
    });
    refreshTable();
}

function updateMarker(id, lat, lng) {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id === id) {
            markers[i].lat = lat;
            markers[i].lng = lng;
        }
    }
    refreshTable();
}

function refreshTable() {
    $('#table').bootstrapTable('load', markers);
}

