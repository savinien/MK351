import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:string;
  email:string;
  address:Address;
  isEdit:boolean = false;
  hobbies:string[];
  posts:Post[];

  constructor(private dataService:DataService, private router:Router) {
    console.log("constructor ran...");
  }

  ngOnInit() {
    this.name = "Bugs Bunny";
    this.age = "21";
    this.email = "bbunny@gmail.com";
    this.address = {
      street: "rue du coin",
      city: "Ecully",
      state: "Rhone-Alpes"
    };
    this.hobbies = ['Fool around', 'Procastinate', 'Watch youtube', 'Smoke cigarets'];
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  changeName(newName:string){
    console.log("method changeName() called...");
    this.name = newName;
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby){
    console.log(hobby);
    //this.hobbies.push(hobby); // add it at the array's end
    this.hobbies.unshift(hobby); // add it at the array's begining
  }

  deleteHobby(hobby){
    console.log(hobby);
    for (let i=0; i < this.hobbies.length; i++){
      if (this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  goToAbout(){
    this.router.navigate(['/about'])
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
