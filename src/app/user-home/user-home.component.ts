import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
   libraryimage:string="assets/images/libraryimage.jpeg";
  constructor( private router:Router) { }

  ngOnInit(): void {
    sessionStorage.setItem("bookid","0");
  }

  addContribution(){
    this.router.navigateByUrl('/addcontribution');
  }

}
