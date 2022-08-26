import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Invoice } from 'src/models/invoice.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toppings = new FormControl('');
  toppingList: string[] = ['peding', 'paid'];
  invoice: Invoice = new Invoice();

  constructor() {}

  // Save form input for createting invoice
  saveInvoice() {
    console.log('invoice:', this.invoice);
  }
}
