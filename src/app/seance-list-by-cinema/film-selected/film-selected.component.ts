import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-selected',
  templateUrl: './film-selected.component.html',
  styleUrls: ['./film-selected.component.css']
})
export class FilmSelectedComponent implements OnInit {

  @Input() film;
  @Input() cinema;

  constructor() { }

  ngOnInit() {
  }

}
