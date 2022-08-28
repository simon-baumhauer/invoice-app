import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Invoice } from 'src/models/invoice.class';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
})
export class InvoiceDetailComponent implements OnInit {
  invoiceId: any = '';
  invoice = new Invoice();

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.invoiceId = paramMap.get('id');
      console.log('GOT ID', this.invoiceId);
      this.getInvoice();
    });
  }

  getInvoice() {
    this.firestore
      .collection('invoices')
      .doc(this.invoiceId)
      .valueChanges()
      .subscribe((invoice: any) => {
        this.invoiceId = new Invoice(invoice);
        console.log('Retrieved user', this.invoiceId);
      });
  }
}
