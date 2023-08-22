import { Component, OnInit } from '@angular/core';
import {identiLocation} from '../../../utils/utils'
import { Location } from '@angular/common';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  currentUrl: string='';
  constructor(private location: Location) {
    this.currentUrl = identiLocation(location);
   }

  ngOnInit(): void {
    console.log('this.currentUrl',this.currentUrl)
  }

}
