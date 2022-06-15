import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookcontributionserviceService } from '../bookcontributionservice.service';

@Component({
  selector: 'app-addcontribution',
  templateUrl: './addcontribution.component.html',
  styleUrls: ['./addcontribution.component.css']
})
export class AddcontributionComponent implements OnInit {

  constructor(public service: BookcontributionserviceService) { }

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
      copies: '',
      bookimage: null
     

    }
  }
}
