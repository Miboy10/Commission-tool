import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export abstract class FirestoreCrudService<T> {
    protected ref: AngularFirestoreCollection<T> = null;

    constructor(protected collectionName: string, protected firestore: AngularFirestore) {
        this.ref = firestore.collection(this.collectionName);
    }

    get() {
        return this.ref.snapshotChanges().pipe(map(changes => 
            changes.map(c => 
                ({id: c.payload.doc.id, ...c.payload.doc.data()})
                )
            )
        );
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