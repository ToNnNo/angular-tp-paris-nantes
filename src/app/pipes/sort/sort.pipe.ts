import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  private static compare(a: string, b: string): number {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  transform(value: string[], order: string = 'asc'): string[] {

    if ( order === 'asc' ) {
      value.sort( SortPipe.compare );
    } else if (order === 'desc') {
      value.sort( SortPipe.compare ).reverse();
    } else {
      throw new Error(`La valeur "${order}" n'est pas une valeur valide pour la fonction sortPipe.
      Utiliser plutôt 'asc' ou 'desc' à la place.`);
    }

    return value;
  }

}
