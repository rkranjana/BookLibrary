import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookcontributionserviceService } from '../bookcontributionservice.service';
import { BookDetails } from '../bookdata.model';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {
  
  id:string=""
  statusid:number=0;
  approver:string="";
  book:string[];
  xlist:any[]=[];
  specificbookdata:any[]=[];
 // bookList:any[]=[{bookId:1,bookName:"Wings of Fire",description:"It is an Autobiography By Dr APJ Abdul Kalam",category:"Autobiography",author:" Dr A P J Abdul Kalam",imageData:"/assets/images/lib01.PNG",empName:"Aami Adwaith",empId:1272,emailId:"aami@gmail.com",dateInserted:"02-06-2022",isapproved:0},
  //{bookId:2,bookName:"Tenali Raman",description:"It is a short story book for children",category:"Autobiography",author:" M K Kaiz",imageData:"/assets/images/lib01.PNG",empName:"Sia Sai",empId:1272,emailId:"sai@gmail.com",dateInserted:"03-06-2022",isapproved:1,approvedBy:"Mia Mick",approvedDate:"04-06-2022"}]
  constructor(private router:Router,public service:BookcontributionserviceService) { }

  ngOnInit(): void {
  this.id=sessionStorage.getItem("bookid")||"0"
  this.GetSpecificBookList(this.id);
  
  }

  updateStatus(id:number,name:string){
    alert("status:"+id+ "approved by:" + name);
  }
 
  gouserhome(){
    this.router.navigateByUrl('/userhome');
  }

  GetSpecificBookList(id:string) {
    this.service.GetSpecificBookData(id).subscribe(m => {
     this.specificbookdata = m;
      //this.book = Object.keys(m)
      this.accessdata(m);
     console.log(this.book);
    }
    )
  }

  accessdata(m:any){
    this.xlist=[];
    let bookId;
    let bookName;
    let categoryId;
    let description;
    let author;
    let empId;
    let empName;
    let emailId;
    let imageBlob;
    let imageUploaded;
    let isApproved;
    let approvedDate;
    let approvedBy;
    let dateInserted;
    let isActive;

    Object.entries(m).forEach(
      ([key, value]) => {
        if (key == "bookId"){
          bookId=value as number;
        }
        else if (key == "categoryId"){
          categoryId=value as number;
        }
        else if (key == "bookName"){
          bookName=value as string;
        }
        else if (key == "description"){
          description=value as string;
        }
        else if (key == "author"){
          author=value as string;
        }
        else if (key == "empId"){
          empId=value as number;
        }
        else if (key == "empName"){
          empName=value as string;
        }
        else if (key == "emailId"){
          emailId=value as string;
        }
        else if (key == "imageAzureBlobId"){
          imageBlob=value as string;
        }
        else if (key == "imageUploaded"){
          imageUploaded=value as string;
        }
        else if (key == "isApproved"){
          isApproved=value as boolean;
        }
        else if (key == "approvedDate"){
          approvedDate=value as any;
        }
        else if (key == "approvedBy"){
          approvedBy=value as string;
        }
        else if (key == "dateInserted"){
          dateInserted=value as any;
        }
        else if (key == "isActive"){
          isActive=value as boolean;
          this.xlist.push({ bookId:bookId, categoryId: categoryId, bookName: bookName,description:description,author:author,empId:empId,empName:empName,emailId:emailId,imageBlob:imageBlob,imageUploaded:imageUploaded,isApproved:isApproved,approvedDate:approvedDate,approvedBy:approvedBy,dateInserted:dateInserted,isActive:isActive})
        }
        

      })
  
      }

}
