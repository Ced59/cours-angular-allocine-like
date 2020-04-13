import {Component, OnInit} from '@angular/core';
import {CinemaService} from '../cinema.service';
import {Cinema} from '../cinema';
import {ActivatedRoute} from '@angular/router';
import { Film } from '../film';
import {FilmService} from '../film.service';



@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  cinema$: Cinema;
  films: Film[];

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService,
    private filmService: FilmService
  ) {
  }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('idCinema');
    this.cinema$ = this.cinemaService.get(id);
    this.films = this.filmService.getAll(id);

    console.log(this.cinema$);

  }

}
