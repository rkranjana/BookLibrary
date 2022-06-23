import { DatePipe } from '@angular/common';
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

  categorylist:any[]=[];

  constructor(public service: BookcontributionserviceService,private router:Router,private dtipe: DatePipe) { 
  
  }

  ngOnInit(): void {
    this.resetForm();
    this.GetAllCategoryList();
    //alert(this.dtipe.transform(Date.now(), 'dd-mm-yyyyThh:mm:ss'));
  }

  GetAllCategoryList() {
    this.service.GetAllCategory().subscribe(m => {
    this.categorylist = m;})
  }


  onSubmit(form:NgForm){
    console.log(this.service.formDetail);
    this.service.formDetail.bookId=1;
    this.service.formDetail.isApproved=false;
    this.service.formDetail.approvedBy="";
    this.service.formDetail.isActive=false;
    this.service.formDetail.imageBlob="";
    //yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
    this.service.formDetail.dateInserted=this.dtipe.transform(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    this.service.formDetail.approvedDate=this.dtipe.transform(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
   this.service.postBookDetail().subscribe(m => {
     //this.dtipe.transform(Date.now(), 'h:mm a');
    alert("Added Book Details Successfully.")
   }
   )
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
      imageBlob: '',
      imageUploaded:null,
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
