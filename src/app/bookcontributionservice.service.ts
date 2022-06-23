import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookdata, BookDetails } from './bookdata.model';

@Injectable({
  providedIn: 'root'
})
export class BookcontributionserviceService {

  readonly rootURL = 'https://kitabapi.azurewebsites.net/api/';
  //formDetail : Bookdata;
  formDetail : BookDetails;
  list : BookDetails[];
 // books:BookDetails[]=[{bookId:1,bookName:"Wings of Fire",description:"It is an Autobiography By Dr APJ Abdul Kalam",categoryId:1,author:" Dr A P J Abdul Kalam",imageData:"/assets/images/lib01.PNG",empName:"Aami Adwaith",empId:1272,emailId:"aami@gmail.com",dateInserted:"02-06-2022",isApproved:true,approvedBy:"Mia Mick",approvedDate:"04-06-2022",isActive:true,imageAzureBlobId:"12345"}];
  
  constructor(private http: HttpClient) { }

  postBookDetail(){
    return this.http.post<any>("https://kitabapi.azurewebsites.net/api/Book",this.formDetail) ;
    //return this.http.post("https://kitabapi.azurewebsites.net/api/Book",this.formDetail);
  }

    GetbookListData(){
      return this.http.get<any[]>("https://kitabapi.azurewebsites.net/api/Book/GetList");
    }

    GetSpecificBookData(id:string){
      
      return this.http.get<any[]>("https://kitabapi.azurewebsites.net/api/Book/"+id);
    }

    GetAllCategory(){
      return this.http.get<any[]>("https://kitabapi.azurewebsites.net/api/Category/GetList");
    }
}
