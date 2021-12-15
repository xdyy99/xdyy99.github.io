// Modules
import menu from './modules/menu.js';
import password from './modules/password.js';
import tab from './modules/tab.js';
import table from './modules/table.js';
import createScrollTop from './modules/scrollToTop.js';
import ScrollToSectionModule from './modules/ScrollToSectionModule.js';
import SSwiper from './modules/swiper.js';
import active from './modules/active.js';
import select2 from './modules/select2.js';
import upfile from './modules/upfile.js';
import popup from './modules/popup.js';

// Run
window.addEventListener('DOMContentLoaded', () => {
  menu();
  password();
  tab();
  table();
  SSwiper();
  createScrollTop();
  active();
  ScrollToSectionModule();
  select2();
  upfile();
  popup();

  if ($('#map-canvas').length) {
    google.maps.event.addDomListener(window, 'load', initmap);
    var infowindow = new google.maps.InfoWindow({
      size: new google.maps.Size(150, 50),
    });
    var map;
    var gmarkers = [];
    function createMarker(latlng, title) {
      var marker = new google.maps.Marker({
        position: latlng,
        title: title,
        icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDgwIDgwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MCA4MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MCwwQzI2LjE5MSwwLDE1LDExLjE5NCwxNSwyNWMwLDIzLjg3LDI1LDU1LDI1LDU1czI1LTMxLjEzLDI1LTU1QzY1LDExLjE5NCw1My44MDcsMCw0MCwweiAgICAgTTQwLDM4LjhjLTcuNDU3LDAtMTMuNS02LjA0NC0xMy41LTEzLjVTMzIuNTQzLDExLjgsNDAsMTEuOGM3LjQ1NSwwLDEzLjUsNi4wNDQsMTMuNSwxMy41UzQ3LjQ1NSwzOC44LDQwLDM4Ljh6IiBmaWxsPSIjM2FhODAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
      });
      google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(title);
        infowindow.open(map, marker);
      });
      gmarkers.push(marker);
      return marker;
    }
    function callinfobox(i) {
      google.maps.event.trigger(gmarkers[i], 'click');
    }
    function deleteMarkers() {
      clearMarkers();
      gmarkers = [];
    }
    // Sets the map on all markers in the array.
    function setMapOnAll(map) {
      for (var i = 0; i < gmarkers.length; i++) {
        gmarkers[i].setMap(map);
      }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
      setMapOnAll(null);
    }
    function initmap() {
      var myLatlng = new google.maps.LatLng(10.78573, 106.66647);
      var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true,
        draggable: true,
        zoomControlOptions: {
          //              position: google.maps.ControlPosition.BOTTOM_LEFT
        },
        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e9e9e9' }, { lightness: 17 }] },
          { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 20 }] },
          { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }, { lightness: 17 }] },
          { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }] },
          { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 18 }] },
          { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 16 }] },
          { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 21 }] },
          { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#dedede' }, { lightness: 21 }] },
          { elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }] },
          { elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }] },
          { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
          { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#f2f2f2' }, { lightness: 19 }] },
          { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#fefefe' }, { lightness: 20 }] },
          { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }] },
        ],
      };
      var mapElement = document.getElementById('map-canvas');

      // Create the Google Map using our element and options defined above
      map = new google.maps.Map(mapElement, mapOptions);
      createMarker(
        myLatlng,
        '<a href="https://mona-media.com/dich-vu/thiet-ke-website-chuyen-nghiep/" title="Công ty thiế kế website chuyên nghiệp">Thiết kế website</a>&nbsp;<img src="http://mona-media.com/logo.png" style="width:20px;vertical-align:sub" alt="MonaMedia"> <strong>Mona Media</strong>'
      ).setMap(map);
    }
  }
});
