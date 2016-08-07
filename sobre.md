---
layout: page
title: "Sobre"
header-img: "img/circuito.jpg"
---

### Encontros

Realizamos encontros semanalmentes no Laboratório de Extenção do Bloco C no IME/USP.

<h4>QUINTAS-FEIRAS 16:00H</h4>

<div id="map" style="height: 300px;"></div>
<script>
  function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: -23.5588111, lng: -46.7317217},
        zoom: 17
    });

        var marker = new google.maps.Marker({
          position: {lat: -23.5588111, lng: -46.7317217},
          map: map
        });
  }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6N1gnMHeqSjmvkzRcHJqqL5F0CObDH6U&callback=initMap">
</script>

Para aqueles que gostam de precisão: -23.5588111,-46.7317217. Para os menos precisos: R. do Matão, 1010 - Cidade Universitaria, São Paulo - SP, 05508-090.
