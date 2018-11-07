# Crash course on ionic 4


0. [Setup](#ionicsetup)
1. [ionic basics](#ionicbas)
2. [ionic storage](#ionicstore)


Main reference [ionic documentation](https://ionicframework.com/docs/), in particular the [tutorial](https://ionicframework.com/docs/intro/tutorial/).

<a name="ionicsetup"></a>
## 0. Setup

Install [nodejs](https://nodejs.org/en/download/).

Install ionic: `npm install -g ionic`


<a name="ionicbas"></a>
## 1. ionic basics

<a name="ionicstore"></a>
## 2. ionic storage

Create a blank ionic project:
```
ionic start appStorage blank --type=angular
```
Follow the set up on the ionic [doc](https://ionicframework.com/docs/storage/):
```
npm install --save @ionic/storage
```
import and declare it in `app.module.ts`:
```ts
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    //...
    IonicStorageModule.forRoot()
  ],
  //...
})
export class AppModule {}
```
In `home.page.ts`:
```ts
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

```
and in `home.page.html`:
```html
<ion-header>
  <ion-toolbar>
    <ion-title>
      An example - local storage
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  
  <ion-list>
    <ion-item>
      <ion-input placeholder="Input a sentence"
              type="text"
              [(ngModel)]="sentence" name="sentence">
      </ion-input>
    </ion-item>
  </ion-list>

  <ion-button *ngIf="sentence"
              shape="round"
              color="secondary"
              fill="outline"
              (click)=save()>
              save sentences
  </ion-button>

  <ion-button shape="round"
              color="secondary"
              fill="outline"
              (click)=store()>
              store sentences
  </ion-button>

  <ion-button shape="round"
              color="primary"
              fill="outline"
              (click)=retrieve()>
              retrieve sentences
  </ion-button>

  <ion-button shape="round"
              color="danger"
              fill="outline"
              (click)=delete()>
              delete sentences
  </ion-button>

  <div>
    <ion-list>
      <ion-item>SENTENCES:</ion-item>
      <ion-item *ngFor="let sentence of data">{{sentence}}</ion-item>
    </ion-list>
  </div>

<div>
  <ion-list>
    <ion-item>RETRIEVED SENTENCES:</ion-item>
    <ion-item *ngFor="let sentence of storedData">{{sentence}}</ion-item>
  </ion-list>
</div>


</ion-content>
```
