import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var window;

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {

  title: string;
  description: string;
  events: Event[];
  myPicture: string;
  error: string;
  myLatLng: Coordinates = {lat:null, lng:null};

  constructor(private storage:Storage, private camera: Camera, private geolocation: Geolocation){}

  ngOnInit(){
    this.loadMap();
    this.events = [];
    this.storage.get('events').then(
      (val) => {
        console.log(val);
        if (val !== null) {
        this.events = val;
      };
        console.log("stored events:", this.events);
      }
    );

  }

  picture(){
    console.log("taking a picture");
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    };
    this.camera.getPicture(options).then((imageData) => {
      //this.myPicture = 'data:image/jpeg;base64,' + imageData;
      this.myPicture = window.Ionic.WebView.convertFileSrc(imageData);
      console.log("BLA - picture taken:", imageData);
      }, (err) => {
      this.error = err;
      console.log("BLA - error occured: ", err);
    });
  }

  store(){
    console.log("storing the event...");
    let event: Event = {title:"", description:"", pictureURL:"", coordinates: this.myLatLng};
    event.title = this.title;
    event.description = this.description;
    console.log(this.myPicture);
    if (this.myPicture == undefined) {
      console.log('picture was undefined, placeholder instead');
      this.myPicture = "https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552";
    };
    event.pictureURL = this.myPicture; //the myPicture variable takes the value of the URL address of the image in the picture() method
    console.log("event to store: ", event);
    console.log("events before push: ", this.events);
    if (Object.keys(this.events).length < 1) {
      console.log("array was empty");
      this.events = [event];
    } else {
      this.events.push(event);
    }
    console.log("events after push: ", this.events);
    this.storage.set('events', this.events);
    this.title = "";
    this.description = "";
  }

  async loadMap() {
    this.myLatLng = await this.getLocation();
    console.log("GPS coordinates: ", this.myLatLng);
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

}

export interface Event {
  title: string;
  description: string;
  pictureURL: string;
  coordinates: Coordinates;
  // add date, gps, picture
}

export interface Coordinates {
  lat: number,
  lng: number
}
