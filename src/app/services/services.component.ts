import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service } from '../shared/service-model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input('isLoading') isLoading!: boolean;
  @Input('data') services!: Service[];

  constructor() { }

  ngOnInit(): void {
  }

  isActive(stars: number, index: number) {
    if (stars >= index) return true;
    else return false;
  }

}
