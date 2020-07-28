import { Injectable } from '@angular/core';
import { FirestoreCrudService } from './firestore.service';
import { IOrder } from '../models/Order';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends FirestoreCrudService<IOrder> {

  constructor(protected firestore: AngularFirestore) { 
    super("orders", firestore);
  }
}
