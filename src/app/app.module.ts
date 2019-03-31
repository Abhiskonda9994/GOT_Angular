import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule , Routes } from '@angular/router';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { ViewcharactersComponent } from './viewcharacters/viewcharacters.component';
import { ViewhousesComponent } from './viewhouses/viewhouses.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
    },
  {
  path: 'home',
  component: HomeComponent
  },
  {
  path:'books',
  component:HomeComponent
  },
  {
  path:'houses',
  component:HomeComponent
  }, 
  {
  path:'characters',
  component:HomeComponent
  },
  {
  path:'books/:bookId',
  component:ViewbookComponent
  },
  {
    path:'characters/:characterId',
    component:ViewcharactersComponent
  },
  {
    path:'houses/:houseId',
    component:ViewhousesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewbookComponent,
    ViewcharactersComponent,
    ViewhousesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
