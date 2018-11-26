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
  modTitle: string;
  modDescription: string;

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
    console.log("currently edited event:", this.event);
    this.displayList = false;
  }

  modifyEvent(evt){
    console.log("current event edited:", this.event);
    /*
    let ev: Event = {title:"", description:"", pictureURL:"", coordinates: {lat:null, lng:null}};
    ev.title = this.event.title;
    ev.description = this.event.description;
    ev.pictureURL = this.event.pictureURL;
    ev.coordinates = this.event.coordinates;
    this.eventIndex = this.events.indexOf(this.event);
    this.events[this.eventIndex] = ev;
    this.storage.set('events', this.events);
    console.log("event modified: ", this.event);
    */
    this.event = evt;
    this.eventIndex = this.events.indexOf(this.event);
    this.event.title = this.modTitle;
    this.event.description = this.modDescription;
    console.log("events: ", this.events, " \n --- \n current event: ", this.event,"\n --- \n current event index: ", this.eventIndex);
    this.events[this.eventIndex] = this.event;
    console.log("new event at eventIndex: ", this.events[this.eventIndex]);
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
