import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'money-track';

  constructor(private firestore: AngularFirestore) { }

  getTransactions() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  addTransaction(data) {
    return this.firestore.collection(this.collectionName).add(data);
  }

  updateTransaction(id, data) {
    return this.firestore.doc(this.collectionName + '/' + id).update(data);
  }

  deleteTransaction(transactionId) {
    return this.firestore.doc(this.collectionName + '/' + transactionId).delete();
  }

  getSingleTransaction(id) {
    return this.firestore.collection(this.collectionName).doc(id).valueChanges();
  }
}
