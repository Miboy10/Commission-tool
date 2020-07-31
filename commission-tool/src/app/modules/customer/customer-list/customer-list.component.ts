import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from 'src/app/models/Customer';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // public customers: ICustomer[];
  public displayedColumns: string[] = ['name', 'email', 'discord', 'twitter', 'actions']
  public dataSource = new MatTableDataSource<ICustomer>();
  public ogDataSource = new MatTableDataSource<ICustomer>();

  private filterString: string = "";

  public loading: boolean = true;

  constructor(private customerService: CustomerService, public router: Router, public clipboard: Clipboard, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    if (this.ogDataSource.data.length <= 0) {
      this.customerService.get().subscribe(result => {
        this.ogDataSource.data = result;
        if (this.dataSource.data.length <= 0) this.dataSource.data = this.ogDataSource.data;
        if (this.filterString.length > 0) this.filterCustomers(this.filterString);
        this.loading = false;
      });
    }
  }

  filterCustomers(filter: string) {
    this.filterString = filter;
    this.dataSource.data = this.ogDataSource.data.filter(customer => {
      return (
        customer.name.toLowerCase().search(filter.toLowerCase()) > -1 || 
        customer.email.toLowerCase().search(filter.toLowerCase()) > -1 || 
        customer.discord.toLowerCase().search(filter.toLowerCase()) > -1 || 
        customer.twitter.toLowerCase().search(filter.toLowerCase()) > -1 || 
        customer.fiverr.toLowerCase().search(filter.toLowerCase()) > -1 ||
        customer.paypal_email.toLowerCase().search(filter.toLowerCase()) > -1 ||
        customer.twitch.toLowerCase().search(filter.toLowerCase()) > -1 ||
        customer.instagram.toLowerCase().search(filter.toLowerCase()) > -1
      )
    });
  }

  view(customer: ICustomer) {
    this.router.navigate(['/customer/view/' + customer.id]);
    return;
  }

  copy(text: string) {
    this.clipboard.copy(text);
    this.snackbar.open("Copied \"" + text + "\" to your clipboard!", "Close");
  }



}
