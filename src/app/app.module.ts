import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './components/pages/location/location.component';
import { EpisodeComponent } from './components/pages/episode/episode.component';
import { CardCharactersComponent } from './components/pages/card-characters/card-characters.component';
import { NotFoundComponentComponent } from './components/pages/not-found-component/not-found-component.component';
import {AllListComponent} from './components/pages/all-list/all-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
    LocationComponent,
    EpisodeComponent,
    CardCharactersComponent,
    AllListComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
