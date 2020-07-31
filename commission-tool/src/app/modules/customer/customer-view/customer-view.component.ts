import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICustomer, Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  private id: string;
  public customer: ICustomer;

  constructor(private currentRoute: ActivatedRoute, private customerService: CustomerService) {
    this.customer = new Customer;
  }

  ngOnInit(): void {
    this.currentRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.loadCustomer();
    });
  }

  loadCustomer() {
    this.customerService.getById(this.id).subscribe(_customer => this.customer = _customer);
  }

}
