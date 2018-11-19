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

  backToList(){
    this.displayList = true;
  }

}
