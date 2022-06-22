import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {
  
  id:string=""
  statusid:number=0;
  approver:string="";
  bookList:any[]=[{bookId:1,bookName:"Wings of Fire",description:"It is an Autobiography By Dr APJ Abdul Kalam",category:"Autobiography",author:" Dr A P J Abdul Kalam",imageData:"/assets/images/lib01.PNG",empName:"Aami Adwaith",empId:1272,emailId:"aami@gmail.com",dateInserted:"02-06-2022",isapproved:0},
  {bookId:2,bookName:"Tenali Raman",description:"It is a short story book for children",category:"Autobiography",author:" M K Kaiz",imageData:"/assets/images/lib01.PNG",empName:"Sia Sai",empId:1272,emailId:"sai@gmail.com",dateInserted:"03-06-2022",isapproved:1,approvedBy:"Mia Mick",approvedDate:"04-06-2022"}]
  constructor(private router:Router) { }

  ngOnInit(): void {
  this.id=sessionStorage.getItem("bookid")||"0"
  }

  updateStatus(id:number,name:string){
    alert("status:"+id+ "approved by:" + name);
  }
 
  gouserhome(){
    this.router.navigateByUrl('/userhome');
  }
}
