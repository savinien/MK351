# Crash course on ionic 4


0. [Setup](#ionicsetup)
1. [ionic basics](#ionicbas)
2. [ionic storage](#ionicstore)
3. [Using the phone camera](#camera)
4. [Using google maps](#googlemaps)


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


<a name="camera"></a>
## 3. Using the phone camera

Reference: [ionic camera native](https://ionicframework.com/docs/native/camera/).

Create a new project: `ionic start appCamera blank --type=angular`, and cd into the project: `cd appCamera`.

Add the android platform: `ionic cordova add platform android`

To install the camera plugin do the following:
- update ionic-native: `npm install @ionic-native/core@5.0.0-beta.14`
- add the camera tools from ionic-native: `npm install @ionic-native/camera@5.0.0-beta.14 --save`
- install the plugin: `ionic cordova plugin add cordova-plugin-camera`
- declare and import it in `app.module.ts`:
```ts
\*...*\
import { Camera } from '@ionic-native/camera/ngx';
\*...*\

@NgModule({
  \*...*\

  providers: [
    \*...*\
    Camera,
    \*...*\
  ]
  \*...*\
})
export class AppModule { }
```

On your home page, `home/home.page.ts`, import the camera provider and inject it into the constructor:
```ts
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(private camera: Camera) { }

}
```

On your home page template, `home.page.html`, create a button to take a picture and display the last picture taken:
```html
<ion-header>
  <ion-toolbar>
    <ion-title>
      Testing the camera
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  <button ion-button (click)="takePicture()">Take a picture</button>
  <div align="center">
    <ion-img src="{{ myPicture }}"></ion-img>
  </div>
</ion-content>

```
and code the `takePicture()` method and a property `myPicture` to display the image on the home template:
```ts
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window;

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
     //this.myPicture = 'data:image/jpeg;base64,' + imageData;
     this.myPicture = window.Ionic.WebView.convertFileSrc(imageData);
     console.log("picture taken:", imageData);
    }, (err) => {
     console.log("error occured");
    });
  }

}
```

<a name="googlemaps"></a>
## 4. Setup
- create a blank project `ionic start gmapApp blank --type=angular`
- `cd gmapApp`
- add plugin (insert your google map API_KEY): 

`ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="GOOGLE_MAPS_KEY_HERE" --variable API_KEY_FOR_IOS="GOOGLE_MAPS_KEY_HERE"`

- `npm install --save @ionic-native/google-maps`
- `ionic cordova platform add android`
- in `platform/android/build.gradle` replace the `buildscript` and `allprojects` by:
```
buildscript {
    repositories {
        google()
        maven {
            url "https://maven.google.com"
        }
        jcenter()
    }
    dependencies {

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
        classpath 'com.android.tools.build:gradle:3.0.0'
    }
}

allprojects {
    repositories {
        google()
        maven {
            url "https://maven.google.com"
        }
        jcenter()
    }
    //This replaces project.properties w.r.t. build settings
    project.ext {
      defaultBuildToolsVersion="25.0.2" //String
      defaultMinSdkVersion=19 //Integer - Minimum requirement is Android 4.4
      defaultTargetSdkVersion=26 //Integer - We ALWAYS target the latest by default
      defaultCompileSdkVersion=26 //Integer - We ALWAYS compile with the latest by default
    }
}
```

