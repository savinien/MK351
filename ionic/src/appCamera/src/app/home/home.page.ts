import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

myPicture: any;

constructor(private camera: Camera) { }

takePicture(){
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  this.camera.getPicture(options).then((imageData) => {
   this.myPicture = 'data:image/jpeg;base64,' + imageData;
   console.log("picture taken:", imageData);
  }, (err) => {
   console.log("error occured");
  });
}


}
