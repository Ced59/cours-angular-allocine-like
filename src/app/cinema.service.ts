import { Injectable } from '@angular/core';
import { cinemas } from './mock-cinema';
import {Cinema} from './appInterfaces/cinema';



@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor() { }

  getAll(): Cinema[] {
    return cinemas;
  }

  get(id){

    return cinemas.find(element => element.id === id);
  }
}
