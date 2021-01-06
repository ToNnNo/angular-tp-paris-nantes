import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {

  date = new Date();

  user = null; // object

  users = [
    'Marie', 'Romain', 'Denis', 'Sylvain', 'Fredy', 'Jade',
    'Yosra', 'Ahmed', 'John', 'Jane', 'William', 'Elisabeth'
  ];

  nb = 4;
  start = 0;
  end = this.start + this.nb;

  constructor() { }

  ngOnInit(): void {
  }

  public prev(): void {
    if (this.start > 0) {
      this.start -= this.nb;
      this.end -= this.nb;
    }
  }

  public next(): void {
    if (this.end < this.users.length) {
      this.start += this.nb;
      this.end += this.nb;
    }
  }

}
