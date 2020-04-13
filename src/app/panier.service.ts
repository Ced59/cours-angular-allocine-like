import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PanierService {

  seances = [];
  nbreArticlePanier = 0;

  constructor() { }

  ajouterPanier(seance) {
    this.seances.push(seance);
    this.nbreArticlePanier = this.seances.length;
  }


  recupererNbreArticlePanier() {
    return this.nbreArticlePanier;
  }
}
