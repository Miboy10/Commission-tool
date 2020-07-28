import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderDeleteComponent } from './order-delete/order-delete.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderUpdateComponent } from './order-update/order-update.component';
import { OrderViewComponent } from './order-view/order-view.component';



@NgModule({
  declarations: [OrderCreateComponent, OrderDeleteComponent, OrderListComponent, OrderUpdateComponent, OrderViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: OrderListComponent },
      { path: 'list', component: OrderListComponent },
      { path: 'create', component: OrderCreateComponent },
      { path: 'edit/:id', component: OrderUpdateComponent },
      { path: 'view/:id', component: OrderViewComponent },
      { path: 'delete/:id', component: OrderDeleteComponent },
    ])
  ]
})
export class OrderModule { }
