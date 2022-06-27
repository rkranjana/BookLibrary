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

  size:any;
  categorylist:any[]=[];
  insertbookdata:any={  
    bookId:0,
    categoryId :0,
    bookName:"",
    description:"",
    author:"",
    empId:0,
    empName:"",
    emailId:"",
    imageBlob:"",
    imageUploaded:"",
    isApproved:false,
    approvedDate:"",
    approvedBy:"",
    dateInserted:"",
    isActive:false,
    statementType:""
  }

  // bookId: number=0;
  //   categoryId: number=0; 
  //   bookName: string="";
  //   description: string="";
  //   author: string="";
  //   empId: number=0;
  //   empName: string="";
  //   emailId: string="";
  //   imageBlob: string="";
  //   imageUploaded:string="";
  //   isApproved: boolean=false;
  //   approvedDate:any="";
  //   approvedBy: string="";
  //   dateInserted: any="";
  //   isActive: boolean=true;


  constructor(public service: BookcontributionserviceService,private router:Router,private dtipe: DatePipe) { 
  
  }

  ngOnInit(): void {
    this.GetAllCategoryList();
    this.resetForm();
   
    //alert(this.dtipe.transform(Date.now(), 'dd-mm-yyyyThh:mm:ss'));
  }

  GetAllCategoryList() {
    this.service.GetAllCategory().subscribe(m => {
    this.categorylist = m;})
  }


  onSubmit(form:NgForm){
   // console.log(this.service.formDetail);
    this.service.formDetail.statementType="Insert"

     this.insertbookdata.bookId=0;
     this.insertbookdata.categoryId=Number(this.service.formDetail.categoryId);
     this.insertbookdata.bookName=this.service.formDetail.bookName;
     this.insertbookdata.description=this.service.formDetail.description;
     this.insertbookdata.author=this.service.formDetail.author;
     this.insertbookdata.empId=Number(this.service.formDetail.empId);
     this.insertbookdata.empName=this.service.formDetail.empName;
     this.insertbookdata.emailId=this.service.formDetail.emailId;
     this.insertbookdata.imageBlob="";
     this.insertbookdata.imageUploaded="";
     this.insertbookdata.isApproved=false;
     this.insertbookdata.approvedDate=this.dtipe.transform(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
     this.insertbookdata.approvedBy="";
     this.insertbookdata.dateInserted=this.dtipe.transform(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
     this.insertbookdata.isActive=false;
     this.insertbookdata.statementType="Insert";

    //this.service.formDetail.isApproved=false;
    //this.service.formDetail.approvedBy="";
   // this.service.formDetail.isActive=false;
   // this.service.formDetail.imageBlob="";
    //yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
    //this.service.formDetail.dateInserted=this.dtipe.transform(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    //this.service.formDetail.approvedDate=this.dtipe.transform(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  
    console.log(this.insertbookdata)
  
    //post method
    this.service.postBookDetail(this.insertbookdata).subscribe(m => 
      { console.log(m);
        alert("Added Book Details Successfully.")
        this.resetForm();
      })
  
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
      isActive: false,
      statementType:''
    }
  }

  gouserhome(){
    this.router.navigateByUrl('/userhome');
  }

  onChange(evt:any){
    let image:any = evt.target.files[0];
   //console.log(evt.target.files[0])
    //alert(this.size);
    //console.log(image);
    if(this.size>10000){
      alert("Image size is too large.Cannot be uploaded!!")
      this.service.formDetail.imageUploaded="";
   }
  }
}
