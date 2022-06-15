import { Injectable } from '@angular/core';
import { Bookdata } from './bookdata.model';

@Injectable({
  providedIn: 'root'
})
export class BookcontributionserviceService {

  formDetail : Bookdata;
  constructor() { }
}
