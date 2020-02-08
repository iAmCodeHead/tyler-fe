import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as mapboxgl from 'mapbox-gl';
import { MapboxService } from '../services/mapbox.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // private map;

  map: mapboxgl.Map;
  style = 'mapbox://styles/iamcodehead/ck6dwdrhz146b1isawghjzkgi';
  lat = 13.0569951;
  lng = 80.20929129999999;
  message = 'Hello World!';

  constructor(private mapboxService: MapboxService) { 
  //   this.map.addSource('customMarker', {
  //     type: 'geojson',
  //     data: {
  //       type: 'FeatureCollection',
  //       features: []
  //     }
  // });

  // const markers = this.mapboxService.getMarkers();
  // const data = {
  //   type: 'FeatureCollection',
  //   features: markers
  // };
  // this.map.getSource('customMarker').setData(data);

  //  this.map.addLayer({
  //         id: 'customMarketid',
  //         source: 'customMarker',
  //         type: 'symbol',
  //         layout: {
  //           'text-field': '{message}',
  //           'text-size': 24,
  //           'text-transform': 'uppercase',
  //           'icon-image': 'marker-15',
  //           'text-offset': [0, 1.5]
  //         },
  //         paint: {
  //           'text-color': '#f16624',
  //           'text-halo-color': '#fff',
  //           'text-halo-width': 2
  //         }
  //       });


  }

  ngOnInit() {
    // this.map.on('load', (event) => {
    //   // add the real time map data
    //   });
  }






  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
  
    tiles.addTo(this.map);
  }

}
