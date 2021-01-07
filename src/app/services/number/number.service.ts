import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  public getNumbers(): Observable<number[]> {

    return new Observable<number[]>( (subscriber: Subscriber<number[]>) => {

      subscriber.next( this.numbers );

      // subscriber.error( new Error('Je sais pas ...') );

      setTimeout( _ => {

        subscriber.next( this.numbers.map( (value: number) => {
          return value + 10;
        } ) );

      }, 2000);

      setTimeout( _ => {

        subscriber.next( this.numbers.map( (value: number) => {
          return (value + 10) * 10;
        } ) );

        subscriber.complete();

      }, 4000);

    });

  }

}
