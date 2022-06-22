import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookcontributionserviceService } from '../bookcontributionservice.service';

@Component({
  selector: 'app-addcontribution',
  templateUrl: './addcontribution.component.html',
  styleUrls: ['./addcontribution.component.css']
})
export class AddcontributionComponent implements OnInit {

  

  constructor(public service: BookcontributionserviceService,private router:Router) { 
  
  }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form:NgForm){
    console.log(this.service.formDetail)
    
    // this.service.postBookDetail().subscribe(
    //   res => {
    //   this.resetForm(form);
    //   this.service.refreshList();
    //   },
    //   err => {
    //   console.log(err);
    //   }
    //   )
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formDetail = {
      bookId:0,
      bookName: '',
      categoryId: null,
      description:'',
      author:'',
      empId:null,
      empName:'',
      emailId:'',
      imageAzureBlobId: '',
      imageData:null,
      isApproved:false,
      approvedDate:'',
      approvedBy: '',
      dateInserted: '',
      isActive: false
    }
  }

  gouserhome(){
    this.router.navigateByUrl('/userhome');
  }
}
