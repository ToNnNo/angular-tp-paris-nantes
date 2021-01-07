import { Component, OnDestroy, OnInit } from '@angular/core';
import { NumberService } from '../../services/number/number.service';
import { TimeService } from '../../services/time/time.service';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  numbers: number[] = [];
  message: string;
  disabled = false;

  date: Date;

  subcription: Subscription;

  // créer un nouveau service
  // setInterval()

  constructor(private numberService: NumberService, private timeService: TimeService) { }

  ngOnInit(): void {
    this.subcription = this.timeService.getTime().subscribe( (date: Date) => {
      this.date = date;
    });
  }

  public synchroniser(): void {
    this.disabled = true;
    this.message = null;

    this.numberService.getNumbers().subscribe( (arrayNumber: number[]) => {

      this.numbers = arrayNumber;

    }, (error: Error) => {}, () => {

      this.message = 'Synchronisation terminé.';
      this.disabled = false;

    });
  }

  public subject(): void {
    const subject = new Subject<string>();
    subject.next('1er Valeur');

    subject.subscribe( value => {
      console.log(`La valeur de subject est ${value}`);
    });

    subject.next('2eme valeur');
  }

  public behaviorSubject(): void {
    const behaviorSubject = new BehaviorSubject<string>('Valeur initiale');

    // behaviorSubject.next('1ere valeur');

    behaviorSubject.subscribe( value => {
      console.log(`La valeur de behavior subject est ${value}`);
    }, () => {}, () => { console.log('fin'); });

    behaviorSubject.next('2eme valeur');
    behaviorSubject.complete();
  }

  public replaySubject(): void {
    const replaySubject = new ReplaySubject<string>(2);

    replaySubject.next('1ere valeur');
    replaySubject.next('2eme valeur');
    replaySubject.next('3eme valeur');

    replaySubject.subscribe( value => {
      console.log(`La valeur de replay subject est ${value}`);
    });

    replaySubject.next('4eme valeur');
  }


  ngOnDestroy(): void {
    this.timeService.stopInterval(); // on arrête la boucle setInterval
    this.subcription.unsubscribe(); // libère la mémoire de l'observable
  }

}
