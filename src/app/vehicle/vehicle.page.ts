import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  dateTime
  constructor() { }

  ngOnInit() {
    this.dateTime = new Date().toISOString();
  }

}
