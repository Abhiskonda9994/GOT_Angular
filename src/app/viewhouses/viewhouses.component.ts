import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { IHouses } from '../houses';

@Component({
  selector: 'app-viewhouses',
  templateUrl: './viewhouses.component.html',
  styleUrls: ['./viewhouses.component.css']
})
export class ViewhousesComponent implements OnInit {
  public getHousesDetails:any;
  public houseDetails:any;
  house:IHouses[];
  
  constructor(private _route: ActivatedRoute,private router: Router,private dataservice: DataService){
 }
  

  ngOnInit() {
    let houseId = this._route.snapshot.paramMap.get('houseId')
    this.getHousesDetails = this.dataservice.getHousesDetails(houseId).subscribe(

      data =>{
        console.log(data);
        this.houseDetails = data;
        
        console.log("House Details : "+this.houseDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
    
  }

}
