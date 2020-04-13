import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceListByCinemaComponent } from './seance-list-by-cinema.component';

describe('SeanceListByCinemaComponent', () => {
  let component: SeanceListByCinemaComponent;
  let fixture: ComponentFixture<SeanceListByCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeanceListByCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceListByCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
