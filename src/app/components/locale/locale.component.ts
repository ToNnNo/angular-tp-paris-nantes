import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {

  locale: string;
  devise: string;

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
