import { Component, OnInit } from '@angular/core';
import {Film} from '../appInterfaces/film';
import {Cinema} from '../appInterfaces/cinema';
import {ActivatedRoute} from '@angular/router';
import {CinemaService} from '../cinema.service';
import {FilmService} from '../film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: Film;
  cinema: Cinema;

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    const idCinema: number = +this.route.snapshot.paramMap.get('idCinema');
    const idFilm: number = +this.route.snapshot.paramMap.get('idFilm');
    this.cinema = this.cinemaService.get(idCinema);
    this.film = this.filmService.get(idFilm);
  }

}
