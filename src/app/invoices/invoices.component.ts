import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Invoice } from 'src/models/invoice.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  invoice = new Invoice();
  allInvoices!: [];
  constructor(private firestore: AngularFirestore, private router: Router) {}

  // Get Invoices from Firebase
  ngOnInit(): void {
    this.firestore
      .collection('invoices')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allInvoices = changes;
        console.log('Received allInvoices:', this.allInvoices);
      });
  }
}
