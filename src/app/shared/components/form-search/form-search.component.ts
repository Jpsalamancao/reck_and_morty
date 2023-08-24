import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { getSessionStorage} from '../../../utils/utils'

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  url:any;
  constructor(
    private router: Router,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.identiLocation()
    this.url=getSessionStorage('url')
  }
  identiLocation(){
    const currentUrl = this.location.path();

  }
  search(valueInput: string) {
    console.log('URL actual:', this.url);
    console.log('valor actual:', valueInput);
    if (valueInput && valueInput.length > 3) {
      this.router.navigate([this.url], {
        queryParams: { dataSearch: valueInput },
      });
    }
  }

}
