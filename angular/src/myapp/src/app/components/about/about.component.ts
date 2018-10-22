import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = "About our app";
  elements: string[] = ["element 1", "element 2", "element 3"];

  constructor() { }

  ngOnInit() {
  }

  getTitle(){
    return this.title
  }
}
