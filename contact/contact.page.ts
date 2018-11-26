import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Event } from '../about/about.page';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {

  events: Event[];
  event: Event;
  displayList: boolean = true;
  eventIndex: number;

  constructor(private storage:Storage){}

  ngOnInit(){
    this.storage.get('events').then(
      (val) => {
        this.events = val;
        console.log("stored events:", val);
      }
    )
  }

  editEvent(evt){
    this.event = evt;
    this.displayList = false;
  }

  modifyEvent(evt){
    this.eventIndex = this.events.indexOf(this.event);
    this.events[this.eventIndex] = evt;
    this.storage.set('events', this.events);
  }

  deleteEvent(evt){
    this.eventIndex = this.events.indexOf(this.event);
    this.events.splice(this.eventIndex, 1);
    this.storage.set('events', this.events);
    this.displayList = true;
  }

  backToList(){
    this.displayList = true;
  }

}
