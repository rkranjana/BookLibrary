export class Bookdata {
    bookid:number;
    bookname:string;
    bookcategory:string;
    bookdetail:string;
    bookimage?: HTMLImageElement;

}
export class BookDetails {
    bookId: number=0;
    categoryId: number=0; 
    bookName: string="";
    description: string="";
    author: string="";
    empId: number=0;
    empName: string="";
    emailId: string="";
    imageBlob: string="";
    imageUploaded:string="";
    isApproved: boolean=false;
    approvedDate:any="";
    approvedBy: string="";
    dateInserted: any="";
    isActive: boolean=true;

}
