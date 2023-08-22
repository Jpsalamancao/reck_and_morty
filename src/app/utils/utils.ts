import { Location } from '@angular/common';

export const identiLocation = (location: Location): string =>{
  return location.path();
}

