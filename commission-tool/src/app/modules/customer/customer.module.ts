import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';



@NgModule({
  declarations: [CustomerCreateComponent, CustomerUpdateComponent, CustomerDeleteComponent, CustomerListComponent, CustomerViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CustomerListComponent },
      { path: 'list', component: CustomerListComponent },
      { path: 'create', component: CustomerCreateComponent },
      { path: 'edit/:id', component: CustomerUpdateComponent },
      { path: 'view/:id', component: CustomerViewComponent },
      { path: 'delete/:id', component: CustomerDeleteComponent }
    ])
  ]
})
export class CustomerModule { }
