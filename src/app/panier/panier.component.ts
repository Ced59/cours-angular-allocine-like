import {Component, OnInit} from '@angular/core';
import {PanierService} from '../panier.service';
import {Seance} from '../appInterfaces/seance';
import * as moment from 'moment';
import {Time} from '@angular/common';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})


export class PanierComponent implements OnInit {

  seances: Seance[];

  constructor(
    private panier: PanierService
  ) { }

  ngOnInit() {
    this.seances = this.panier.getPanier();
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

  getTauxTVA() {
    return 20;
  }

  getTotalTtc() {
    let somme = 0;
    this.seances.forEach(s => somme += s.prix);
    return somme;
  }

  getTva() {
    return this.getTotalTtc() / 100 * this.getTauxTVA();
  }

  getTotalHt() {
    return this.getTotalTtc() - this.getTva();
  }
}
