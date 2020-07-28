export enum OrderStatus {
    Requested,
    Sketch,
    Lineart,
    Colour,
    Shading,
    Touch_ups,
    Submitted,
    Accepted
}

export interface IOrder {
    id ?: string;
    created_by_user_id ?: string;
    created_by_user_name ?: string;
    customer_id ?: string;
    customer_name ?: string;
    title ?: string;
    description ?: string;
    total_price ?: number;
    work_days ?: number;
    created_at ?: Date;
    updated_at ?: Date;
    due_date ?: Date;
    paid ?: boolean;
    payment_date ?: Date;
    status ?: OrderStatus;
}

export class Order implements IOrder {
    id: string;
    created_by_user_id: string;
    created_by_user_name: string;
    customer_id: string;
    customer_name: string;
    title: string;
    description: string;
    total_price: number;
    work_days: number;
    created_at: Date;
    updated_at: Date;
    due_date: Date;
    paid: boolean;
    payment_date: Date;
    status: OrderStatus;
}

