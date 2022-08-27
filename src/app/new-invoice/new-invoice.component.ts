import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/models/invoice.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss'],
})
export class NewInvoiceComponent implements OnInit {
  invoice: Invoice = new Invoice();
  invoiceDate!: Date;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {}

  // Save form input for createting invoice
  saveInvoice() {
    this.invoice.invoiceDate = new Date(this.invoiceDate);
    console.log('invoice:', this.invoice);
    // Close SideNav
    this.opened = false;

    this.firestore
      .collection('invoices')
      .add(this.invoice.toJson())
      .then((result: any) => {
        console.log('adding Invoice:', result);
      });
  }
}
