import { FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.page.html',
  styleUrls: ['./add-edit-data.page.scss'],
})
export class AddEditDataPage implements OnInit {

  isEdit: boolean;
  type: string;
  title: string;
  subtitle: string;
  amount: string;
  id: any;
  loading: boolean;



  constructor(private route: ActivatedRoute, private router: Router, private firebaseService: FirebaseService) {
    this.route.params.subscribe((data: any) => {
      console.log(data.type);
      if(data.type=="add") {
        this.isEdit = false;
      } else {
        this.isEdit = true;
        this.id = data.type;
        this.firebaseService.getSingleTransaction(data.type).subscribe((data: any) => {
          console.log(data);
          this.type = data.type;
          this.title = data.title;
          this.subtitle = data.subtitle;
          this.amount = data.amount;
        })
      }
    })
  }

  ngOnInit() {
  }

  addTransaction() {
    this.loading = true;

    if(this.isEdit) {
      this.updateTransaction();
      return;
    }

    let data = {
      type: this.type,
      title: this.title,
      subtitle: this.subtitle,
      amount: this.amount,
    }

    this.firebaseService.addTransaction(data).then((res: any) => {
      console.log(res);
      this.loading = false;
      this.router.navigateByUrl('tabs/tab2')
    })
  }

  updateTransaction() {
    let data = {
      type: this.type,
      title: this.title,
      subtitle: this.subtitle,
      amount: this.amount,
    }

    this.firebaseService.updateTransaction(this.id, data).then((res: any) => {
      console.log(res);
      this.loading = false;
      this.router.navigateByUrl('tabs/tab2')
    })
  }




}
