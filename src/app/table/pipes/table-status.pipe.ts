import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableStatus'
})
export class TableStatusPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let result;
    switch(value) {
      case 1: 
        result = 'Available';
        break;
      case 2: 
        result = 'Serving';
        break;
      case 3: 
        result = 'Closed'
        break;
      default: 
        result = 'NA';
        break;
    }
    return result;
  }

}
