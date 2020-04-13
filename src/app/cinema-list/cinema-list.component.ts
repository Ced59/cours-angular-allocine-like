import {Component, OnInit} from '@angular/core';
import {cinemas} from '../mock-cinema';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {

  cinemas = cinemas;

  constructor() {
  }

  ngOnInit() {
  }

}
