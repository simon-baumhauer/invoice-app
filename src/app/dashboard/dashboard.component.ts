import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  status = new FormControl('');
  statusList: string[] = ['peding', 'paid'];
  opened!: boolean;
  constructor() {}

  ngOnInit(): void {}

  receiveDateFromNewInvocie($event: any) {
    this.opened = $event;
    console.log(this.opened);
  }
}
