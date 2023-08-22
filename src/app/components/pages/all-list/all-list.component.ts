import { DOCUMENT } from '@angular/common';
import {
  Component, HostListener, Inject, OnInit,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, Params, Router,
} from '@angular/router';


import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../interfaces/caracter.Interface';

import{ take } from"rxjs/operators";

type RequestInfo={
  next: string | any;
}

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.scss']
})
export class AllListComponent implements OnInit {

  characters: Character[] = [];
  info: RequestInfo ={
    next: null,
  }
  showGoUpButton = false;

  private pageNum = 1;

  private query:string | any;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    //private document:Document,
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }


  ngOnInit(): void {
    this.getCharactersByQuery()
  }

    private getCharactersByQuery(): void {
      this.route.queryParams.subscribe((params: Params) => {
        console.log('Params=>',params)
        this.query = params['dataSearch'];
        this.getDateFromService();
      });
    //this.router.navigate(['url'],{queryParams: {name:'juan'}});
  }


  private getDateFromService(): void{
    console.log('this.query =', this.query)
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe((res:any)=>{
      //SCROLL INFINITO ESTO SE DEBE ARREGLAR PARA PAGINAR
      if(res?.results?.length){
        console.log('Responsive =>', res)
        const { info, results } = res;
        this.characters = [...this.characters, ...results]
        this.info = info;
      }else{
        this.characters=[];
      }

    })
  }

  onScrollDown(){

  }

  onScrollTop(){

  }


}
