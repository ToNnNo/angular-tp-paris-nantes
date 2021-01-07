import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  id: number;

  constructor() { }

  public getTime(): Observable<Date> {
    return new Observable<Date>( (subscriber: Subscriber<Date>) => {

      subscriber.next(new Date());

      this.id = setInterval( _ => {
        const date = new Date();
        subscriber.next(date);
        // console.log(date);
      }, 1000);

    });
  }

  public stopInterval(): void {
    clearInterval(this.id);
  }
}
