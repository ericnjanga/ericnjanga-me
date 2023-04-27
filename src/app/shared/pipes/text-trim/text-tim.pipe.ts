import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTim'
})
export class TextTimPipe implements PipeTransform {

  transform(value: string, maxLength: number = 50): string {
    if (value.length > maxLength) {
      return value.substr(0, maxLength) + '...';
    }
    return value;
  }

}
