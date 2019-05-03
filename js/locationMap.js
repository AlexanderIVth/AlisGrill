function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else
    {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position)
{
    var destCoords = new google.maps.LatLng(52.773794, -108.296073);
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon);
    mapholder = document.getElementById('mapholder');
    var latlngArray = [latlon, destCoords];
    var latlngbounds = new google.maps.LatLngBounds(destCoords, latlon);
    var myOptions =
    {
        center:latlon,zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({
        position: destCoords, map: map, title: "Destination",
        icon: "http://maps.google.com/mapfiles/marker_greenB.png"
    });
    var currentMarker = new google.maps.Marker({
        position: latlon, map: map, title: "You are here",
        icon: "http://maps.google.com/mapfiles/markerA.png"
    });
    for(var i = 0; i < latlngArray.length; i++)
    {
        latlngbounds.extend(latlngArray[i]);
    }
    map.fitBounds(latlngbounds);
}

function loadAltMap()
{
    var destCoords = new google.maps.LatLng(52.773794, -108.296073);
    mapholder = document.getElementById('mapholder');
    var myOptions =
    {
        center: destCoords, zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    }
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({
        position: destCoords, map: map, title: "Destination",
        icon: "http://maps.google.com/mapfiles/markerA.png"
    });
}

function showError(error)
{
    switch (error.code)
    {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            loadAltMap();
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            loadAltMap();
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred loading map.")
            break;
    }
}