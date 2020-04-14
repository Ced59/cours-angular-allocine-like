import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDispoOthersCinemasComponent } from './film-dispo-others-cinemas.component';

describe('FilmDispoOthersCinemasComponent', () => {
  let component: FilmDispoOthersCinemasComponent;
  let fixture: ComponentFixture<FilmDispoOthersCinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDispoOthersCinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDispoOthersCinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
