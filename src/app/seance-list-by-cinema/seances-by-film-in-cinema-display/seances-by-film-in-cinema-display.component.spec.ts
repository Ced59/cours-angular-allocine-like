import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeancesByFilmInCinemaDisplayComponent } from './seances-by-film-in-cinema-display.component';

describe('SeancesByFilmInCinemaDisplayComponent', () => {
  let component: SeancesByFilmInCinemaDisplayComponent;
  let fixture: ComponentFixture<SeancesByFilmInCinemaDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeancesByFilmInCinemaDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeancesByFilmInCinemaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
