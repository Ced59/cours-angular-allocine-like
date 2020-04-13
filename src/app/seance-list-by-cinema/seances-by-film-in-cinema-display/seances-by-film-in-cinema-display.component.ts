import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-seances-by-film-in-cinema-display',
  templateUrl: './seances-by-film-in-cinema-display.component.html',
  styleUrls: ['./seances-by-film-in-cinema-display.component.css']
})
export class SeancesByFilmInCinemaDisplayComponent implements OnInit {

  @Input() seances;

  constructor() { }

  ngOnInit() {
  }

}
