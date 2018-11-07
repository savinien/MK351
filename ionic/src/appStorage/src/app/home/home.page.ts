import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data:string[];
  sentence:string;
  storedData:string[];

  constructor(private storage:Storage){}

  ngOnInit(){
    this.data = []; //["a default sentence"];
    this.sentence = "";
    this.storedData=[];
  }

  /*
  addSentence(newSentence:string){
    this.data.push(newSentence);
    console.log(this.data);
  }
  */

  save(){
    this.data.push(this.sentence);
    console.log(this.data);
  }

  store(){
    this.storage.set('sentences', this.data);
  }

  retrieve(){
    this.storage.get('sentences').then(
      (val) => {
        this.storedData = val;
        console.log(val);
      }
    )
  }

  delete(){
    this.storedData = [];
    this.data = [];
    this.storage.set('sentences',this.storedData);
  }

}
