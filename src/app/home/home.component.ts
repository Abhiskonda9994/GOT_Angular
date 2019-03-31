import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books = [];
  public characters = [];
  public houses = [];
  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this._dataservice.getBooks().subscribe
    (
      data => {
        this.books = data,
        console.log(data);
      }
    );
    this._dataservice.getCharacters().subscribe
    (
      data => {
        this.characters = data,
        console.log(data);
      }
    );
    this._dataservice.getHouses().subscribe
    (
      data => {
        this.houses = data,
        console.log(data);
      }
    );
  }
  
}
