import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noComment'
})
export class NoCommentPipe implements PipeTransform {

  transform(value: string, long: number): string {
    //si longueur value > number => value coupee + '...'
    if(value.length > long) {
      return value.substring(0, long) + '...';
    }
    //sinon retour value
    return value;
  }

}
