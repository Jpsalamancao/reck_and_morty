import { Component, OnInit } from '@angular/core';
import {identiLocation} from '../../../utils/utils'
import { Location } from '@angular/common';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  currentUrl: string='';
  constructor( private location: Location) {
    this.currentUrl = identiLocation(location);
   }

  ngOnInit(): void {
    console.log('this.currentUrl =',  this.currentUrl)
  }

}
