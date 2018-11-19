import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {

  title: string;
  description: string;
  events: Event[];

  constructor(private storage:Storage){}

  ngOnInit(){
    this.storage.get('events').then(
      (val) => {
        this.events = val;
        console.log("stored events:", val);
      }
    )
  }

  picture(){
    console.log("taking a picture");
  }

  store(){
    console.log("storing the event...");
    let event: Event = {title:"", description:""};
    event.title = this.title;
    event.description = this.description;
    this.events.push(event);
    console.log("event to store: ", event);
    this.storage.set('events', this.events);
  }

}

export interface Event {
  title: string;
  description: string;
  // add date, gps, picture
}
