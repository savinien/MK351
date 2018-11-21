import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

myPicture: string;
error: string;

constructor(private camera: Camera) { }

test(){
  console.log("BLA");
}


takePicture(){
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum: true
  }

  this.camera.getPicture(options).then((imageData) => {
   //this.myPicture = 'data:image/jpeg;base64,' + imageData;
   this.myPicture = window.Ionic.WebView.convertFileSrc(imageData);
   console.log("BLA - picture taken:", imageData);
  }, (err) => {
    this.error = err;
   console.log("BLA - error occured: ", err);
  });
}


}
