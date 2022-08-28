import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
  { path: 'invoice', component: InvoicesComponent },
  { path: 'invoice/:id', component: InvoiceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
