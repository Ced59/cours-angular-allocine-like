import {Component, Input, OnInit} from '@angular/core';
import {SeanceService} from '../../seance.service';

@Component({
  selector: 'app-film-dispo-others-cinemas',
  templateUrl: './film-dispo-others-cinemas.component.html',
  styleUrls: ['./film-dispo-others-cinemas.component.css']
})
export class FilmDispoOthersCinemasComponent implements OnInit {

  @Input() cinemas;
  @Input() idFilm;

  constructor(
    private seanceService: SeanceService
  ) { }

  ngOnInit() {
  }

  getNbreSeanceByFilmByCinema(idCinema, idFilm) {
    return this.seanceService.getNbreSeanceByFilmByCinema(idCinema, idFilm);
  }

}
