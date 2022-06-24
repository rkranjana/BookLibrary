import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Bookdata, BookDetails, BookDetailsInsert } from './bookdata.model';

@Injectable({
  providedIn: 'root'
})
export class BookcontributionserviceService {

  readonly rootURL = 'https://kitabapi.azurewebsites.net/api/';
  formDetail : BookDetails;
  //formDetail : BookDetailsInsert;
  list : BookDetails[];
 // books:BookDetails[]=[{bookId:1,bookName:"Wings of Fire",description:"It is an Autobiography By Dr APJ Abdul Kalam",categoryId:1,author:" Dr A P J Abdul Kalam",imageData:"/assets/images/lib01.PNG",empName:"Aami Adwaith",empId:1272,emailId:"aami@gmail.com",dateInserted:"02-06-2022",isApproved:true,approvedBy:"Mia Mick",approvedDate:"04-06-2022",isActive:true,imageAzureBlobId:"12345"}];
  
  constructor(private http: HttpClient) { }

  postBookDetail(bookdata:any){
  
   return this.http.post<any>("https://kitabapi.azurewebsites.net/api/Book",bookdata) ;
   
  }

    GetbookListData(){
      return this.http.get<any[]>("https://kitabapi.azurewebsites.net/api/Book/GetList");
    }

    GetSpecificBookData(id:string){
      
      return this.http.get<any[]>("https://kitabapi.azurewebsites.net/api/Book/"+id);
    }

    DeleteSpecificBookData(id:number){
     
      return this.http.delete("https://kitabapi.azurewebsites.net/api/Book/"+id);
      }

      UpdateSpecificBookStatus(updatedata:any){
        
        return this.http.patch<any>("https://kitabapi.azurewebsites.net/api/Book",updatedata) ;
      }

    GetAllCategory(){
      return this.http.get<any[]>("https://kitabapi.azurewebsites.net/api/Category/GetList");
    }
}
