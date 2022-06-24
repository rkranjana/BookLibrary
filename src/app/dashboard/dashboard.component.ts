import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BookcontributionserviceService } from '../bookcontributionservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
 
export class DashboardComponent implements OnInit {

bookList:any[]=[{bookId:1,bookName:"Wings of Fire",description:"It is an Autobiography By Dr APJ Abdul Kalam",category:"Autobiography",author:" Dr A P J Abdul Kalam",imageData:"/assets/images/lib01.PNG",empName:"Aami Adwaith",empId:1272,emailId:"aami@gmail.com",dateInserted:"02-06-2022",isapproved:0},
{bookId:2,bookName:"Tenali Raman",description:"It is a short story book for children",category:"Autobiography",author:" M K Kaiz",imageData:"/assets/images/lib01.PNG",empName:"Sia Sai",empId:1272,emailId:"sai@gmail.com",dateInserted:"03-06-2022",isapproved:1,approvedBy:"Mia Mick",approvedDate:"04-06-2022"}]


bookdata:any[]=[];


dataSource = new MatTableDataSource<BookDisplayData>();
BookData: BookDisplayData[];
displayedColumns: string[] = ['bookimage','bookdata','bookstatus','bookview', ];
categorylist:any[]=[];



id:number=0;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

  
  constructor(private router:Router, public service:BookcontributionserviceService) { }

  ngOnInit(): void {
    this.GetBookList();
    
    
    setTimeout(() => {
     this.BookData=this.bookdata; //this.BookData=this.bookList
     this.dataSource = new MatTableDataSource<BookDisplayData>(this.BookData);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
     //console.log("dashboard display"+this.BookData);
     
    }, 1500);
    
   
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  bookdetailview(id:string){

    sessionStorage.setItem("bookid",id);
    this.router.navigateByUrl('/bookview');
  }

  bookdetaildelete(id:number){
    console.log(id);
    if(confirm("Are you sure to delete")){
      this.service.DeleteSpecificBookData(id).subscribe(m=>{
        this.GetBookList();
      setTimeout(() => {
       this.BookData=this.bookdata; //this.BookData=this.bookList
       this.dataSource = new MatTableDataSource<BookDisplayData>(this.BookData);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
       //console.log("dashboard display"+this.BookData);
       
      }, 2000);
        console.log(m);
      })
    }
   
    
  }

  GetAllCategoryList() {
    this.service.GetAllCategory().subscribe(m => {
    this.categorylist = m;
  
  })
  }


  GetBookList() {
    this.service.GetbookListData().subscribe(m => {
     
     this.bookdata = m;
     this.GetAllCategoryList();
     //console.log("http get response"+this.bookdata);
    }
    )
  }

}
export interface BookDisplayData {
  bookId: number;
  categoryId: number; 
  bookName: string;
  description: string;
  author: string;
  empId: number;
  empName: string;
  emailId: string;
  imageAzureBlobId: string;
  imageUploaded:string;
  isApproved: boolean;
  approvedDate: any;
  approvedBy: string;
  dateInserted: any;
  isActive: boolean;
}

