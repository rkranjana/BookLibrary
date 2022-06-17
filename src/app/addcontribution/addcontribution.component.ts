import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookcontributionserviceService } from '../bookcontributionservice.service';

@Component({
  selector: 'app-addcontribution',
  templateUrl: './addcontribution.component.html',
  styleUrls: ['./addcontribution.component.css']
})
export class AddcontributionComponent implements OnInit {

  constructor(public service: BookcontributionserviceService,private router:Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form:NgForm){
    alert("success");
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formDetail = {
      bookid:0,
      bookname: '',
      bookcategory: '',
      bookdetail:'',
      bookimage: null
     

    }
  }

  gouserhome(){
    this.router.navigateByUrl('/userhome');
  }
}
