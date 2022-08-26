import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Invoice } from 'src/models/invoice.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Form values
  toppings = new FormControl('');
  toppingList: string[] = ['peding', 'paid'];
  invoice: Invoice = new Invoice();
  invoiceDate!: Date;

  constructor(private firestore: AngularFirestore) {}

  // Save form input for createting invoice
  saveInvoice() {
    this.invoice.invoiceDate = new Date(this.invoiceDate);
    console.log('invoice:', this.invoice);

    this.firestore
      .collection('invoices')
      .add(this.invoice.toJson())
      .then((result: any) => {
        console.log('adding Invoice:', result);
      });
  }
}
