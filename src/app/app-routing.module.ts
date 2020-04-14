import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaListComponent} from './cinema-list/cinema-list.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { HomeComponent} from './home/home.component';
import { FilmListComponent} from './film-list/film-list.component';
import {SeanceListByCinemaComponent} from './seance-list-by-cinema/seance-list-by-cinema.component';
import {PanierComponent} from './panier/panier.component';
import {PayComponent} from './pay/pay.component';
import {FilmDetailsComponent} from './film-details/film-details.component';


const routes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  { path: 'panier',
    component: PanierComponent
  },
  { path: 'pay',
    component: PayComponent
  },
  { path: 'films/:idCinema/:idFilm/details',
    component: FilmDetailsComponent
  },
  { path: 'films/:idCinema/:idFilm',
    component: SeanceListByCinemaComponent
  },
  { path: 'films/:idCinema',
    component: FilmListComponent
  },
  { path: 'cinemas',
    component: CinemaListComponent },
  { path: '**',
    component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
