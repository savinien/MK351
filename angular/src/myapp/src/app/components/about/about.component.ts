import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = "About our app";
  elements: string[] = ["element 1", "element 2", "element 3"];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  getTitle(){
    return this.title
  }

  backHome(){
    this.router.navigate(['']);
    // this.router.navigateByUrl('');
  }
}
