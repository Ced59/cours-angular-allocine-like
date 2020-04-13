import { Component, OnInit } from '@angular/core';
import {Seance} from '../appInterfaces/seance';
import {ActivatedRoute} from '@angular/router';
import {SeanceService} from '../seance.service';
import {CinemaService} from '../cinema.service';
import {Cinema} from '../appInterfaces/cinema';

@Component({
  selector: 'app-seance-list-by-cinema',
  templateUrl: './seance-list-by-cinema.component.html',
  styleUrls: ['./seance-list-by-cinema.component.css']
})
export class SeanceListByCinemaComponent implements OnInit {

  seances: Seance[];
  cinema: Cinema;

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService,
    private seanceService: SeanceService
  ) { }

  ngOnInit() {
    const idCinema: number = +this.route.snapshot.paramMap.get('idCinema');
    const idFilm: number = +this.route.snapshot.paramMap.get('idFilm');
    this.cinema = this.cinemaService.get(idCinema);
    this.seances = this.seanceService.getAllSeanceByCinemaByFilm(idCinema, idFilm);

    console.log(idCinema);
    console.log(idFilm);
    console.log(this.seances);
  }

}
