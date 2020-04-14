import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel-photos-film',
  templateUrl: './carousel-photos-film.component.html',
  styleUrls: ['./carousel-photos-film.component.css']
})
export class CarouselPhotosFilmComponent implements OnInit {

  @Input() film;

  config: SwiperConfigInterface = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 300,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
