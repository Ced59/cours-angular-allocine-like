import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaListComponent} from './cinema-list/cinema-list.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { HomeComponent} from './home/home.component';
import { FilmListComponent} from './film-list/film-list.component';


const routes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  { path: 'films/:idCinema',
    component: FilmListComponent
  },
  { path: 'cinemas',      component: CinemaListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
