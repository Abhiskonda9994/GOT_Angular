import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IBooks } from '../books';
import { DataService } from '../data.service';


@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  public getBookDetails:any;
  public bookDetails:any;

  book : IBooks[] ;
  constructor(private _route: ActivatedRoute,private router: Router,private dataservice: DataService){
 }
  

  ngOnInit() {
    let bookId = this._route.snapshot.paramMap.get('bookId')
    this.getBookDetails = this.dataservice.getBookDetails(bookId).subscribe(

      data =>{
        console.log(data);
        this.bookDetails = data;
        
        console.log("Book Details : "+this.bookDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
    
  }

}
