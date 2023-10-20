import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

import { Map, NavigationControl, Marker } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const initialState = { lng: -118.36337, lat: 34.09134, zoom: 12 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=Z3I6uUqxy6Gg7YhrluUl`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
    this.map.addControl(new NavigationControl(), 'bottom-right');
    new Marker({ color: '#FF0000' })
      .setLngLat([-118.36337, 34.09134])
      .addTo(this.map);
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
