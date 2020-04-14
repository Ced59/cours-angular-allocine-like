import {Component, OnInit} from '@angular/core';
import {Seance} from '../appInterfaces/seance';
import {ActivatedRoute} from '@angular/router';
import {SeanceService} from '../seance.service';
import {CinemaService} from '../cinema.service';
import {Cinema} from '../appInterfaces/cinema';
import {Film} from '../appInterfaces/film';
import {FilmService} from '../film.service';

@Component({
  selector: 'app-seance-list-by-cinema',
  templateUrl: './seance-list-by-cinema.component.html',
  styleUrls: ['./seance-list-by-cinema.component.css']
})
export class SeanceListByCinemaComponent implements OnInit {

  seances: Seance[];
  film: Film;
  cinema: Cinema;
  cinemas: Cinema[];
  seancesOtherCinemas: Cinema[];

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService,
    private filmService: FilmService,
    private seanceService: SeanceService
  ) {
  }

  ngOnInit() {
    const idCinema: number = +this.route.snapshot.paramMap.get('idCinema');
    const idFilm: number = +this.route.snapshot.paramMap.get('idFilm');
    this.cinema = this.cinemaService.get(idCinema);
    this.film = this.filmService.get(idFilm);
    this.seances = this.seanceService.getAllSeanceByCinemaByFilm(idCinema, idFilm);
    this.cinemas = this.cinemaService.getAll();

    console.log(this.seances);
    console.log(this.seances[0].film.cinemas.filter(cine => cine.id !== idCinema));

    this.seancesOtherCinemas = this.seances[0].film.cinemas.filter(cine => cine.id !== idCinema);

  }

}
