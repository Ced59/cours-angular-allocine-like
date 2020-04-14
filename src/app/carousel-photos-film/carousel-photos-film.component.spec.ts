import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPhotosFilmComponent } from './carousel-photos-film.component';

describe('CarouselPhotosFilmComponent', () => {
  let component: CarouselPhotosFilmComponent;
  let fixture: ComponentFixture<CarouselPhotosFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPhotosFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPhotosFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
