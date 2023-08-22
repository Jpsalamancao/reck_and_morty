import { Component, OnInit } from '@angular/core';
import {identiLocation} from '../../../utils/utils'
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-characters',
  templateUrl: './card-characters.component.html',
  styleUrls: ['./card-characters.component.scss']
})
export class CardCharactersComponent implements OnInit {

  currentUrl: string='';
  constructor( private location: Location) {
    this.currentUrl = identiLocation(location);
   }

  ngOnInit(): void {
    console.log('this.currentUrl =',  this.currentUrl)
  }


}
