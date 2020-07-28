import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { CustomerModule } from './modules/customer/customer.module';
import { OrderModule } from './modules/order/order.module';

const routes: Routes = [
  { path: 'user', loadChildren: () => AuthModule },
  { path: 'customer', loadChildren: () => CustomerModule },
  { path: 'order', loadChildren: () => OrderModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
