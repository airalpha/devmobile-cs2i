import { Camera } from '@ionic-native/camera/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  imgUrl = "assets/empty.jpg";

  constructor(private camera: Camera) { }

  getCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then(response => {
      this.imgUrl = 'data:image/jpeg;base64,' + response;
    }).catch(e => {
      console.log(e);
    })
  }

  getGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then(response => {
      this.imgUrl = 'data:image/jpeg;base64,' + response;
    }).catch(e => {
      console.log(e);
    })
  }

}
