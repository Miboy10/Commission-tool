import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, skip } from 'rxjs/operators';

export abstract class FirestoreCrudService<T> {
    protected ref: AngularFirestoreCollection<T> = null;

    constructor(protected collectionName: string, protected firestore: AngularFirestore) {
        this.ref = firestore.collection(this.collectionName);
    }

    get() {
        return this.ref.snapshotChanges().pipe(map(changes => 
            changes.map(c => 
                ({id: c.payload.doc.id, ...c.payload.doc.data() as T})
            )
        ));
    }

    getById(id: string) {
        return this.ref.doc(id).snapshotChanges().pipe(map(changes => {
            return {id: changes.payload.id, ...changes.payload.data() as T};
        }))
    }

    create(newObject: T) {
        return this.ref.add({...newObject});
    }

    update(id: string, object: T) {
        return this.ref.doc(id).update(object);
    }

    delete(id: string) {
        return this.ref.doc(id).delete();
    }
}