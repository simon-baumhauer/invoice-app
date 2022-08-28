import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  status = new FormControl('');
  statusList: string[] = ['peding', 'paid'];
  opened!: boolean;
  // Form values

  constructor() {}
}
