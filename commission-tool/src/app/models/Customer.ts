import { FormControl, Validators } from '@angular/forms';
import { Model } from './Model';

export interface ICustomer {
    id ?: string;
    name ?: string;
    description ?: string;
    email ?: string; // Personal
    paypal_email ?: string; // Paypal
    discord ?: string;
    twitter ?: string;
    twitch ?: string;
    instagram ?: string;
    fiverr ?: string;
    join_date ?: Date;
    latest_order_date ?: Date;
    total_orders ?: Number;
    disabled ?: boolean;
}

export class Customer extends Model implements ICustomer {
    id: string;
    name: string = "";
    description: string = "";
    email: string = ""; // Personal
    paypal_email: string = ""; // Paypal
    discord: string = "";
    twitter: string = "";
    twitch: string = "";
    instagram: string = "";
    fiverr: string = "";
    join_date: Date = new Date();
    latest_order_date: Date = new Date();
    total_orders: Number = 0;
    disabled: boolean = false;

    rules() {
        return {
            name: [Validators.required],
            email: [Validators.email],
            paypal_email: [Validators.email],
        }
    }
}