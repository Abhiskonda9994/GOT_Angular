import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhousesComponent } from './viewhouses.component';

describe('ViewhousesComponent', () => {
  let component: ViewhousesComponent;
  let fixture: ComponentFixture<ViewhousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
