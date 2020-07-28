import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ICustomer } from '../models/Customer';
import { FirestoreCrudService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends FirestoreCrudService<ICustomer> {

  constructor(protected firestore: AngularFirestore) {
    super("customers", firestore);
  }
}
