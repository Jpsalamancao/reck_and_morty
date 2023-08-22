import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AllListComponent } from '../all-list/all-list.component';
import { CardCharactersComponent } from '../card-characters/card-characters.component'
import { CharacterDetailsComponent } from './character-details/character-details.component';

const myCom=[
  CharacterDetailsComponent,]

@NgModule({
  declarations: [
    ...myCom
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ...myCom
  ]
})
export class CharactersModule { }
