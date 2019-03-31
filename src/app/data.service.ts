import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBooks } from './books';
import { Observable } from 'rxjs';
import { ICharacters } from './characters';
import { IHouses } from './houses';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _urlBooks = 'https://anapioficeandfire.com/api/books';
  public _urlCharacters = 'https://anapioficeandfire.com/api/characters';
  public _urlHouses = 'https://anapioficeandfire.com/api/houses';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBooks[]> {
    return  this.http.get<IBooks[]>(this._urlBooks);
  }

  getCharacters(): Observable<ICharacters[]> {
    return  this.http.get<ICharacters[]>(this._urlCharacters);
  }

  getHouses(): Observable<IHouses[]> {
    return  this.http.get<IHouses[]>(this._urlHouses);
  }

  public getBookDetails(bookId){
    let response1 = this.http.get(this._urlBooks+'/'+bookId);
    console.log("Book Response : "+response1);
    return response1;
   }
  
   public getCharactersDetails(characterId){
    let response2 = this.http.get(this._urlCharacters+'/'+characterId);
    console.log("Character Response : "+response2);
    return response2;
   }

   public getHousesDetails(houseId){
    let response3 = this.http.get(this._urlHouses+'/'+houseId);
    console.log("House Response : "+response3);
    return response3;
   }
 
}
