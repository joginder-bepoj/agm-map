import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/service-model';
import { HTTPService } from '../shared/http-service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    private service: HTTPService
  ) { }

  ngOnInit(): void {
  }

  isLoading: boolean = false;
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number = 16;
  services: Service[] = [];
  isActiveBtn: boolean = false;

  getServices() {
    this.isLoading = true;
    this.services = [];
    setTimeout(() => {
      this.service.getServices().subscribe(data => {
        this.services = data;
        this.isLoading = false;
      });
    }, 400);
  }

}
