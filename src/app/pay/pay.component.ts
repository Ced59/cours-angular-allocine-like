import { Component, OnInit } from '@angular/core';
import {PanierService} from '../panier.service';
import {Seance} from '../appInterfaces/seance';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  seances: Seance[];

  constructor(
    private panier: PanierService
  ) { }

  ngOnInit() {
    this.seances = this.panier.getPanier();
  }

  getTotalTtc() {
    let somme = 0;
    this.seances.forEach(s => somme += s.prix);
    return somme;
  }

}
