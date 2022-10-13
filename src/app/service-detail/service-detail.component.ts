import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTPService } from '../shared/http-service';
import { Service } from '../shared/service-model';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  selectedSerice: any;
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number = 20;
  services: Service[] = [];
  serviceId: any;


  start_end_mark: any = [];

  latlng: any = [
    [
      51.67840,
      7.809007
    ],
    [
      51.67840,
      7.809099
    ]
  ];

  constructor(
    private router: Router,
    private service: HTTPService
  ) {
    this.start_end_mark.push(this.latlng[0]);
    this.start_end_mark.push(this.latlng[this.latlng.length - 1]);
    this.zoom = 16;
  }

  ngOnInit(): void {
    let id = this.router.url.split(['/'][0]);
    this.serviceId = id[2];
    this.service.getServices().subscribe((data: any) => {
      this.services = data;
      this.getServiceDetails(this.serviceId);
    });
  }

  getServiceDetails(serviceId: any) {
    let item = this.services.filter((item: Service) => item.id == serviceId);
    this.selectedSerice = item[0];
  }

  isActive(stars: number, index: number) {
    if (stars >= index) return true;
    else return false;
  }

}
