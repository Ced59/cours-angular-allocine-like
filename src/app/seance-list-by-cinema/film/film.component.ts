import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input() film;

  constructor() { }

  ngOnInit() {
    console.log(this.film);
  }

}
