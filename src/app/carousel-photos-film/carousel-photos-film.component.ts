import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-photos-film',
  templateUrl: './carousel-photos-film.component.html',
  styleUrls: ['./carousel-photos-film.component.css']
})
export class CarouselPhotosFilmComponent implements OnInit {

  @Input() film;

  constructor() { }

  ngOnInit() {
  }

}
