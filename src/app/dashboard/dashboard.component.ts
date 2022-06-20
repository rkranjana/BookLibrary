import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
 
export class DashboardComponent implements OnInit {

  bookList:any[]=[{bookid:1,bookname:"Wings of Fire",bookcategory:"Autobiography",bookimage:"/assets/images/libraryimage.jpeg",bookdontd:"Aami Adwaith"},
  {bookid:2,bookname:"Tenali Raman",bookcategory:"Short story",bookimage:"/assets/images/libraryimage.jpeg",bookdontd:"Aadi Abhi"},
  {bookid:3,bookname:"Tell Me Why",bookcategory:"Children digest",bookimage:"/assets/images/libraryimage.jpeg", bookdontd:"Sia Sai"},
  {bookid:4,bookname:"Secret Seven",bookcategory:"Story",bookimage:"/assets/images/libraryimage.jpeg", bookdontd:"Jia Jack"},
  {bookid:5,bookname:"Current Affairs",bookcategory:"General",bookimage:"/assets/images/libraryimage.jpeg", bookdontd:"Ria Ron"},
  {bookid:6,bookname:"World of Knowledge",bookcategory:"General",bookimage:"/assets/images/libraryimage.jpeg", bookdontd:"Mia Mathew"}
]
BookData: BookDisplayData[] =this.bookList
displayedColumns: string[] = ['bookimage','bookdata','bookview' ];
dataSource = new MatTableDataSource<BookDisplayData>(this.BookData);


@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

  
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
export interface BookDisplayData {
  bookid: number;
  bookname: string;
  bookcategory: string;
  bookimage: string;
  bookdontd: string;
}

