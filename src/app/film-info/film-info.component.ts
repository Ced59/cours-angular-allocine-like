import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  @Input() film;
  @Input() cinema;

  constructor() { }

  ngOnInit() {
  }

}
