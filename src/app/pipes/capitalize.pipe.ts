import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  capitalize(word:string){
    return word[0].toUpperCase() + word.slice(1);
  }
  transform(value: string): string {
    let a = value.split(' ').map(this.capitalize).join(' ');
    return a;
  }

}
