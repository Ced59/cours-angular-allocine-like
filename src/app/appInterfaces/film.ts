import {Time} from '@angular/common';
import {PhotosFilm} from './photos-film';

export interface Film {
  cinemas: any;
  id: number;
  photos: PhotosFilm[];
  titre: string;
  duree: Time;
  image: string;
  synopsis: string;
}
