import {Component, Input, OnInit} from '@angular/core';
import {PanierService} from '../../panier.service';
import * as moment from 'moment';
import {Time} from '@angular/common';




@Component({
  selector: 'app-seances-by-film-in-cinema-display',
  templateUrl: './seances-by-film-in-cinema-display.component.html',
  styleUrls: ['./seances-by-film-in-cinema-display.component.css']
})
export class SeancesByFilmInCinemaDisplayComponent implements OnInit {

  @Input() seances;

  constructor(
    private panier: PanierService
  ) { }

  ngOnInit() {
  }

  ajouterPanier(seance) {
    this.panier.ajouterPanier(seance);
  }

  dateFormat(date) {
    moment.locale('fr');
    return moment(date).format('LL');
  }

  hourBeginFormat(date) {
    moment.locale('fr');
    return moment(date).format('HH:mm');
  }

  calcEndHour(date, length: Time) {
    const endHour = moment(date).add(length.hours, 'hours').add(length.minutes, 'minutes');
    return moment(endHour).format('HH:mm');
  }

}
