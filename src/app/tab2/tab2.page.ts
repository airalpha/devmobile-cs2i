import { FirebaseService } from './../firebase.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  moneyTransactions: any;

  constructor(public firebaseService: FirebaseService) {
    this.firebaseService.getTransactions().subscribe((res) => {
      this.moneyTransactions = res.map(e => {
        return {
          id: e.payload.doc.id,
          type: e.payload.doc.data()['type'],
          title: e.payload.doc.data()['title'],
          subtitle: e.payload.doc.data()['subtitle'],
          amount: e.payload.doc.data()['amount'],
        }
      })
      console.log(this.moneyTransactions);
    }, (err: any) => {
      console.log(err);
    })
  }

  deleteTransaction(transactionId) {
    this.firebaseService.deleteTransaction(transactionId).then((res: any) => {
      console.log(res);
    })
  }

}
