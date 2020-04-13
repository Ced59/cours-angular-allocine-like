import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../cinema.service';
import {Cinema} from '../cinema';


@Component({
  selector: 'app-list-cinemas',
  templateUrl: './list-cinemas.component.html',
  styleUrls: ['./list-cinemas.component.css']
})
export class ListCinemasComponent implements OnInit {
  cinemas: Cinema[];


  constructor(cinemaService: CinemaService) {
    this.cinemas = cinemaService.getAll();
  }

  ngOnInit() {
  }

}
