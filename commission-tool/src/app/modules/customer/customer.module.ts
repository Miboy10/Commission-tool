import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

// Customer modules
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';

// Angular material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Forms
import { ReactiveFormsModule } from '@angular/forms';

import {ClipboardModule} from '@angular/cdk/clipboard';


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
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ClipboardModule
  ]
})
export class CustomerModule { }
