import { Component, OnInit } from '@angular/core';
import {PanierService} from '../panier.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nbreArticlesPanier;

  constructor(
    private panier: PanierService
  ) { }

  ngOnInit() {
  }

  majNbreArticlesPanier() {
    this.nbreArticlesPanier = this.panier.getNbreArticlePanier();
    return this.nbreArticlesPanier;
  }


}
