import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookdata, BookDetails } from './bookdata.model';

@Injectable({
  providedIn: 'root'
})
export class BookcontributionserviceService {

  readonly rootURL = 'https://localhost:44302/api/Book';
  //formDetail : Bookdata;
  formDetail : BookDetails;
  list : BookDetails[];
  constructor(private http: HttpClient) { }

  postBookDetail(){
    return this.http.post(this.rootURL,this.formDetail);
  }

  refreshList(){
   this.http.get(this.rootURL)
   .subscribe(res => this.list = res as BookDetails[]);
    }
}
