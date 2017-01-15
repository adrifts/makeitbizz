$(function () {

    function initMap() {

        var location = new google.maps.LatLng(38.7571633, -9.1582799,19);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'img/marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<h3>Make It Bizz</h3>' +
                '<div class="info-content">' +
                '<p>Edificio Tec Labs - Centro de Inovação Campos da FCUL - Campo Grande 1749-016 Lisboa / Portugal</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

       


    }

    google.maps.event.addDomListener(window, 'load', initMap);
});