export class Bookdata {
    bookid:number;
    bookname:string;
    bookcategory:string;
    bookdetail:string;
    bookimage?: HTMLImageElement;

}
export class BookDetails {
    bookId: number;
    categoryId: number; 
    bookName: string;
    description: string;
    author: string;
    empId: number;
    empName: string;
    emailId: string;
    imageAzureBlobId: string;
    imageData?: HTMLImageElement;
    isApproved: boolean=false;
    approvedDate: any;
    approvedBy: string;
    dateInserted: any;
    isActive: boolean;

}
