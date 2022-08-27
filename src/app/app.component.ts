import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';

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
  allInvoices!: [];

  constructor(private firestore: AngularFirestore) {}

  // Get Invoices from Firebase
  ngOnInit(): void {
    this.firestore
      .collection('invoices')
      .valueChanges()
      .subscribe((changes: any) => {
        this.allInvoices = changes;
        console.log('Received allInvoices:', this.allInvoices);
      });
  }
}
