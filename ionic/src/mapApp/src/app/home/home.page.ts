import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  myLatLng: Coordinates = {lat:null, lng:null};

  constructor(private geolocation: Geolocation) {
  }

  ngOnInit(){
    this.loadMap();
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

interface Coordinates {
  lat: number,
  lng: number
}
