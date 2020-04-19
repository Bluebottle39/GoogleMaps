function initMap() {
  //option pour la carte
  var options = {
    zoom: 9,
    //centrer sur yverdon
    center: { lat: 46.7785, lng: 6.6412 },
  };
  //Nouvelle carte
  var map = new google.maps.Map(document.getElementById("map"), options);

  addMarker({
    coords: { lat: 46.7785, lng: 6.6412 },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: "<h1>Yverdon</h1>",
  });

  //Fonction ajouter marker
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    //verifier si icon custom
    if (props.iconImage) {
      //definire icon
      marker.setIcon(props.iconImage);
    }

    //verifier si infoWindo
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
