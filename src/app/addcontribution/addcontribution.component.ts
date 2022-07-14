import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnonymousCredential, BlobServiceClient, newPipeline } from '@azure/storage-blob';
import { Exception } from '@microsoft/applicationinsights-web';
import { Observable, Subscriber } from 'rxjs';
import { BookcontributionserviceService } from '../bookcontributionservice.service';
import { AppMonitoringService } from '../services/loggingservice.service';

@Component({
  selector: 'app-addcontribution',
  templateUrl: './addcontribution.component.html',
  styleUrls: ['./addcontribution.component.css']
})
export class AddcontributionComponent implements OnInit {

  myimage!: Observable<any>;
  base64code!: any
  imagedata:File;

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


  constructor(public service: BookcontributionserviceService,private router:Router,private dtipe: DatePipe,
    public logservice:AppMonitoringService) { 
  
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
     this.insertbookdata.imageUploaded=this.base64code;
     this.insertbookdata.isApproved=false;
     this.insertbookdata.approvedDate=this.dtipe.transform(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
     this.insertbookdata.approvedBy="";
     this.insertbookdata.dateInserted=this.dtipe.transform(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
     this.insertbookdata.isActive=false;
     this.insertbookdata.statementType="Insert";     
  
  
    //console.log(this.insertbookdata)
  
    try
    {
    //post method
    this.service.postBookDetail(this.insertbookdata).subscribe(m => 
      { //console.log(m);
        try{
          this.azureimageupload();
        }
        catch(ex)
        {
        this.logservice.logException(ex,1);
        }
        
        alert("Added Book Details Successfully.")
        this.resetForm();
      })
    }
    catch(ex)
    {
      this.logservice.logException(ex,1);
    }
  }

    azureimageupload(){
      const fd =new FormData();
      fd.append('ImageFile',this.imagedata);
      //fd.append('type',this.imagedatatest.type);
     // console.log("halo"+fd.get('ImageFile'));
      this.service.postImageDetail(fd).subscribe(m=>{
      //console.log(m);
      this.myimage = null;
      this.base64code = null;

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
   
    this.imagedata=<File>evt.target.files[0];
    this.myimage = null;
    this.base64code = null;
    //console.log(evt);
    let image:any = evt.target.files[0];
    //console.log(evt.target.files[0]);
    this.size = image.size;
    if(this.size>10000){
      alert("Image size is too large.Cannot be uploaded!!")
      this.service.formDetail.imageUploaded="";
    }
   else{
    //converting to byte array
    const target = evt.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    //console.log(file);
    this.convertToBase64(file)
  
    }
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
 
    observable.subscribe((d) => {
      //console.log(d)
      this.myimage = d
      this.base64code = d
      //console.log(this.base64code);
    })
  }
 
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
 
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

  
}
