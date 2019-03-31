import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcharactersComponent } from './viewcharacters.component';

describe('ViewcharactersComponent', () => {
  let component: ViewcharactersComponent;
  let fixture: ComponentFixture<ViewcharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
