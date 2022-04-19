import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limiter?: number): any {
    if (!value){
      return null;
    }
    let charLimit = limiter ? limiter : 60;
    let shortString: string;
    if (value.length <= charLimit){
      shortString = value;
    } else {
      shortString = value.substring(0, charLimit) + ' ...';
    }

    return shortString;
  }

}
