import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-dispo-others-cinemas',
  templateUrl: './film-dispo-others-cinemas.component.html',
  styleUrls: ['./film-dispo-others-cinemas.component.css']
})
export class FilmDispoOthersCinemasComponent implements OnInit {

  @Input() cinemas;

  constructor() { }

  ngOnInit() {
  }

}
