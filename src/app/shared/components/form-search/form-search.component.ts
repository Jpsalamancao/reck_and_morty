import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.identiLocation()
  }
  identiLocation(){
    const currentUrl = this.location.path();
    console.log('URL actual:', currentUrl);
  }
  search(valueInput: string) {
    if (valueInput && valueInput.length > 3) {
      this.router.navigate(['/all_List'], {
        queryParams: { dataSearch: valueInput },
      });
    }
  }

}
