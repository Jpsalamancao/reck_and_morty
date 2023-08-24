import { Location } from '@angular/common';

export const identiLocation = (location: Location): string =>{
  return location.path();
}

export const postSessionStorage = (data:string) :void =>{
  sessionStorage.setItem('url', data);
}

export const getSessionStorage = (data:string) :any =>{
  return sessionStorage.getItem( data);
}

