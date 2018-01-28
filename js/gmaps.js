function myMap() {
    var geocoder, map;
    var address = "Banco de Alimentos - Avenida Francisco Silveira Bitencourt - Sarandi, Porto Alegre - RS";

    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var myOptions = {
                zoom: 17,
                center: results[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(document.getElementById("gmaps"), myOptions);

            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });

            var infowindow = new google.maps.InfoWindow({
                content: "<strong>Banco de Alimentos</strong><br/> Av. Francisco Silveira Bitencourt, 1928 - Sarandi / POA"
            });

            marker.setMap(map);
            infowindow.open(map,marker);
        }
    });
}