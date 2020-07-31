import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  public form: FormGroup;
  
  public disableSubmit: boolean = false;

  constructor(private customerService: CustomerService, private router: Router) {
    this.form = new FormGroup(new Customer().getFormControls());
  }

  ngOnInit(): void {
  }

  submit() {
    if (!this.form.invalid) {
      this.disableSubmit = true;
      this.customerService.create(this.form.value).then(() => {
        this.router.navigate(['/customer/list']);
      })
    }
  }

}
