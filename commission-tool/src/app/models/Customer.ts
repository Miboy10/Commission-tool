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

export class Customer implements ICustomer {
    id: string;
    name: string;
    description: string;
    email: string; // Personal
    paypal_email: string; // Paypal
    discord: string;
    twitter: string;
    twitch: string;
    instagram: string;
    fiverr: string;
    join_date: Date;
    latest_order_date: Date;
    total_orders: Number;
    disabled: boolean;
}