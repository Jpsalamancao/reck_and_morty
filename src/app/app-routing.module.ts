import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from '../app/components/pages/location/location.component';
import { EpisodeComponent } from '../app/components/pages/episode/episode.component';
import { CardCharactersComponent } from '../app/components/pages/card-characters/card-characters.component';
import { NotFoundComponentComponent } from '../app//components/pages/not-found-component/not-found-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  //component: CardCharactersComponent }
  { path: 'home', component: CardCharactersComponent },// loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'app-location', component: LocationComponent},
  { path: 'app-episode', component: EpisodeComponent},
  // { path: 'all_List', loadChildren: () => import('./components/pages/all-list/all-list.module').then(m => m.AllListModule) },
  { path: 'character-detailsu/:id', loadChildren: () => import('./components/pages/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule) },
  // { path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
