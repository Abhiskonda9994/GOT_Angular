import { Component, OnInit } from '@angular/core';
import { ICharacters } from '../characters';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewcharacters',
  templateUrl: './viewcharacters.component.html',
  styleUrls: ['./viewcharacters.component.css']
})
export class ViewcharactersComponent implements OnInit {
  public getcharacterDetail:any;
  public characterDetails:any;

  character : ICharacters[] ;
  constructor(private _route: ActivatedRoute,private router: Router,private dataservice: DataService){
 }
  

  ngOnInit() {
    let characterId = this._route.snapshot.paramMap.get('characterId')
    this.getcharacterDetail = this.dataservice.getCharactersDetails(characterId).subscribe(

      data =>{
        console.log(data);
        this.characterDetails = data;
        
        console.log("Character Details : "+this.characterDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
    
  }
}
